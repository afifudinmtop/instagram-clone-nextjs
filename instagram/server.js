const express = require("express");
const session = require("express-session");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = 3000;

const multer = require("multer");
const sharp = require("sharp");
const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcryptjs");

nextApp.prepare().then(() => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  const uploadDir = "./public/uploads";

  // delete file
  const deleteFile = (filename) => {
    try {
      fs.unlinkSync(filename);
      console.log(`File ${filename} berhasil dihapus.`);
    } catch (err) {
      console.error(`Error saat menghapus file ${filename}: ${err.message}`);
    }
  };

  // rename file
  const renameFile = (oldPath, newPath) => {
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`File has been renamed from ${oldPath} to ${newPath}`);
    } catch (err) {
      console.error(`Error occurred while renaming the file: ${err.message}`);
    }
  };

  // Multer storage konfigurasi untuk menamai file sesuai UUID
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      const filename = uuidv4() + "." + ext;
      cb(null, filename);
    },
  });

  const upload = multer({ storage: storage });

  // Konfigurasi MySQL
  const pool = mysql.createPool({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "instagram",
  });

  // Konfigurasi express-session
  app.use(
    session({
      secret: "uhuy", // Ganti dengan rahasia sesi yang sebenarnya
      resave: false,
      saveUninitialized: true,
      cookie: { secure: !dev }, // Gunakan 'secure: true' di produksi dengan HTTPS
    })
  );

  // API route test
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

  // register
  app.post("/api/register/", async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const hash = bcrypt.hashSync(password, 10);
      const uuid = uuidv4();

      // check existing username
      pool.query(
        "SELECT * FROM user WHERE username = ?",
        [username],
        (error, results, fields) => {
          if (results.length > 0) {
            res.json({ pesan: "username exist!" });
          } else {
            // Simpan data ke MySQL
            pool.query(
              "INSERT INTO user SET ?",
              {
                uuid: uuid,
                password: hash,
                username: username,
              },
              (error, results, fields) => {
                if (error) throw error;
                res.json({ pesan: "sukses!" });
              }
            );
          }
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // login
  app.post("/api/login/", async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;

      // check existing username
      pool.query(
        "SELECT * FROM user WHERE username = ?",
        [username],
        (error, results, fields) => {
          if (results.length < 1) {
            return res.json({ pesan: "user not found!" });
          } else {
            const resultx = bcrypt.compareSync(password, results[0].password);
            if (resultx) {
              req.session.user = { uuid: results[0].uuid, isLoggedIn: true };
              return res.json({ pesan: "sukses!" });
            } else {
              return res.json({ pesan: "wrong password!" });
            }
          }
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // get feed
  app.get("/api/feed/", async (req, res) => {
    try {
      const user_uuid = req.session.user.uuid;

      // get data
      pool.query(
        "SELECT * FROM post WHERE user = ?",
        [user_uuid],
        (error, results, fields) => {
          res.json(results);
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // get profil feed
  app.get("/api/profil_feed/", async (req, res) => {
    try {
      const user_uuid = req.session.user.uuid;

      // get data
      pool.query(
        "SELECT * FROM post WHERE user = ?",
        [user_uuid],
        (error, results, fields) => {
          res.json(results);
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // get post
  app.post("/api/post/", async (req, res) => {
    try {
      const uuid = req.body.uuid;

      // get data
      pool.query(
        "SELECT * FROM post WHERE uuid = ?",
        [uuid],
        (error, results, fields) => {
          res.json(results);
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // get_profil
  app.get("/api/get_profil/", async (req, res) => {
    try {
      const user_uuid = req.session.user.uuid;

      pool.query(
        "SELECT * FROM user WHERE uuid = ?",
        [user_uuid],
        (error, results, fields) => {
          return res.json(results);
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // update_name
  app.post("/api/update_name/", async (req, res) => {
    try {
      const name = req.body.name;
      const user_uuid = req.session.user.uuid;

      // get data
      pool.query(
        "UPDATE user SET name = ? WHERE uuid = ?",
        [name, user_uuid],
        (error, results, fields) => {
          return res.json({ pesan: "sukses!" });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // update_bio
  app.post("/api/update_bio/", async (req, res) => {
    try {
      const bio = req.body.bio;
      const user_uuid = req.session.user.uuid;

      // get data
      pool.query(
        "UPDATE user SET bio = ? WHERE uuid = ?",
        [bio, user_uuid],
        (error, results, fields) => {
          return res.json({ pesan: "sukses!" });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // upload foto
  app.post("/api/upload_gambar/", upload.single("gambar"), async (req, res) => {
    try {
      const caption = req.body.caption;
      const file = req.file;
      const resizedFilename = file.filename;

      // Resize gambar
      await sharp(file.path)
        .resize(375, 375)
        .toFile(`${uploadDir}/x-${resizedFilename}`);

      deleteFile(`${uploadDir}/${resizedFilename}`);

      renameFile(
        `${uploadDir}/x-${resizedFilename}`,
        `${uploadDir}/${resizedFilename}`
      );

      // Simpan data ke MySQL
      pool.query(
        "INSERT INTO post SET ?",
        {
          uuid: resizedFilename.split(".")[0],
          gambar: resizedFilename,
          caption: caption,
          user: req.session.user.uuid,
        },
        (error, results, fields) => {
          if (error) throw error;
          return res.json({ pesan: "sukses!" });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // Rute Logout
  app.get("/api/logout", (req, res) => {
    req.session.destroy(); // Menghapus sesi
    res.send("Anda telah logout");
  });

  // Rute untuk memeriksa status sesi
  app.get("/api/session", (req, res) => {
    res.json({ user: req.session.user || null });
  });

  app.get("/api/session_check", (req, res) => {
    if (req.session.user) {
      return res.json({ isLoggedIn: true });
    }
    return res.json({ isLoggedIn: false });
  });

  // Semua request lain akan di-handle oleh Next.js
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
