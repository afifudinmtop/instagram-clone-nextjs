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

// import routes
const authRoutes = require("./routes/authRoutes");
const followRoutes = require("./routes/followRoutes");
const searchRoutes = require("./routes/searchRoutes");
const statsRoutes = require("./routes/statsRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

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

  // use Routes
  app.use("/api/auth", authRoutes);
  app.use("/api/follow", followRoutes);
  app.use("/api/search", searchRoutes);
  app.use("/api/get_stats", statsRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/post", postRoutes);

  // get all post
  app.get("/api/explore/", async (req, res) => {
    const user_uuid = req.session.user.uuid;

    try {
      // get data
      pool.query(
        `SELECT * FROM post WHERE user != ? ORDER BY RAND() LIMIT 100;`,
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

  // user_feed
  app.post("/api/user_feed/", async (req, res) => {
    try {
      const user_uuid = req.body.user_uuid;

      pool.query(
        "SELECT * FROM post WHERE user = ? ORDER BY id DESC",
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

  // go_like
  app.post("/api/go_like/", async (req, res) => {
    try {
      const user = req.body.user_uuid;
      const post = req.body.post_uuid;

      // insert
      pool.query(
        "INSERT INTO likes SET ?",
        {
          user: user,
          post: post,
        },
        (error, results, fields) => {
          if (error) throw error;
          res.json({ pesan: "sukses!" });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // go_unlike
  app.post("/api/go_unlike/", async (req, res) => {
    try {
      const user = req.body.user_uuid;
      const post = req.body.post_uuid;

      // insert
      pool.query(
        "DELETE FROM likes WHERE user = ? AND post = ?",
        [user, post],
        (error, results, fields) => {
          if (error) throw error;
          res.json({ pesan: "sukses!" });
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

  // Semua request lain akan di-handle oleh Next.js
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
