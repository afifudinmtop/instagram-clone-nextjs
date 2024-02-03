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

  // authRoutes
  app.use("/api/auth", authRoutes);

  // get feed
  app.get("/api/feed/", async (req, res) => {
    try {
      const user_uuid = req.session.user.uuid;

      // get data
      pool.query(
        `
        SELECT 
            post.uuid AS post_uuid, 
            post.gambar AS post_gambar, 
            post.caption AS post_caption, 
            post.ts AS post_ts, 
            user.uuid AS user_uuid, 
            user.username AS user_username, 
            user.gambar AS user_gambar, 
            IF(likes.id IS NOT NULL, 'yes', 'no') AS likes 
        FROM post 
        JOIN follow ON post.user = follow.user2 
        JOIN user ON post.user = user.uuid 
        LEFT JOIN likes ON post.uuid = likes.post AND likes.user = ? 
        WHERE follow.user1 = ? 
        ORDER BY RAND();
        `,
        [user_uuid, user_uuid],
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
        `SELECT 
        post.uuid AS post_uuid, 
        post.gambar AS post_gambar, 
        post.caption AS post_caption, 
        post.ts AS post_ts, 
        user.uuid AS user_uuid, 
        user.username AS user_username, 
        user.gambar AS user_gambar

        FROM post

        JOIN user ON post.user = user.uuid

        WHERE post.uuid = ?;`,
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

  // get user search
  app.post("/api/search/", async (req, res) => {
    const searchValue = `%${req.body.searchValue}%`;
    const user_uuid = req.session.user.uuid;

    try {
      // get data
      pool.query(
        `SELECT * FROM user WHERE (name LIKE ? OR username LIKE ?) AND uuid != ? LIMIT 6;`,
        [searchValue, searchValue, user_uuid],
        (error, results, fields) => {
          res.json(results);
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // get_list_following
  app.post("/api/get_list_following/", async (req, res) => {
    const user_uuid = req.body.user_uuid;

    try {
      // get data
      pool.query(
        `SELECT user.* 
        FROM user 
        JOIN follow ON user.uuid = follow.user2 
        WHERE follow.user1 = ?;`,
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

  // get_list_follower
  app.post("/api/get_list_follower/", async (req, res) => {
    const user_uuid = req.body.user_uuid;

    try {
      // get data
      pool.query(
        `SELECT user.* 
        FROM user 
        JOIN follow ON user.uuid = follow.user1 
        WHERE follow.user2 = ?;`,
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

  // get_user
  app.post("/api/get_user/", async (req, res) => {
    try {
      const user_uuid = req.body.user_uuid;

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

      // update data
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

  // update_username
  app.post("/api/update_username/", async (req, res) => {
    try {
      const username = req.body.username;
      const user_uuid = req.session.user.uuid;

      // check existing username
      pool.query(
        "SELECT * FROM user WHERE username = ?",
        [username],
        (error, results, fields) => {
          // update data
          if (results.length < 1) {
            pool.query(
              "UPDATE user SET username = ? WHERE uuid = ?",
              [username, user_uuid],
              (error, results, fields) => {
                return res.json({ pesan: "sukses!" });
              }
            );
          }

          // kalau ada
          else {
            return res.json({ pesan: "username exist!" });
          }
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // cek_follow
  app.post("/api/cek_follow/", async (req, res) => {
    try {
      const user1 = req.session.user.uuid;
      const user2 = req.body.user_uuid;

      // check existing relationship
      pool.query(
        "SELECT * FROM follow WHERE user1 = ? AND user2 = ?",
        [user1, user2],
        (error, results, fields) => {
          if (results.length < 1) {
            return res.json({ pesan: "belum follow" });
          }

          // kalau ada
          else {
            return res.json({ pesan: "follow" });
          }
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // get_stats
  app.post("/api/get_stats/", async (req, res) => {
    try {
      let user;
      if (req.body.user_uuid == "mine") {
        user = req.session.user.uuid;
      } else {
        user = req.body.user_uuid;
      }

      let jumlah_post = 0;
      let follower = 0;
      let following = 0;

      // get jumlah_post
      pool.query(
        "SELECT COUNT(*) AS jumlah_post FROM post WHERE user = ?",
        [user],
        (error, results, fields) => {
          jumlah_post = results[0].jumlah_post;

          // get following
          pool.query(
            "SELECT COUNT(*) AS following FROM follow WHERE user1 = ?",
            [user],
            (error, results, fields) => {
              following = results[0].following;

              // get follower
              pool.query(
                "SELECT COUNT(*) AS follower FROM follow WHERE user2 = ?",
                [user],
                (error, results, fields) => {
                  follower = results[0].follower;

                  return res.json({ jumlah_post, follower, following });
                }
              );
            }
          );
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });

  // go_follow
  app.post("/api/go_follow/", async (req, res) => {
    try {
      const user2 = req.body.user_uuid;
      const user1 = req.session.user.uuid;

      // insert
      pool.query(
        "INSERT INTO follow SET ?",
        {
          user1: user1,
          user2: user2,
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

  // go_unfollow
  app.post("/api/go_unfollow/", async (req, res) => {
    try {
      const user1 = req.session.user.uuid;
      const user2 = req.body.user_uuid;

      // insert
      pool.query(
        "DELETE FROM follow WHERE user1 = ? AND user2 = ?",
        [user1, user2],
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

  // update_foto_profil
  app.post(
    "/api/update_foto_profil/",
    upload.single("gambar"),
    async (req, res) => {
      try {
        const file = req.file;
        const resizedFilename = file.filename;
        const user_uuid = req.session.user.uuid;

        // Resize gambar
        await sharp(file.path)
          .resize(100, 100)
          .toFile(`${uploadDir}/x-${resizedFilename}`);

        deleteFile(`${uploadDir}/${resizedFilename}`);

        renameFile(
          `${uploadDir}/x-${resizedFilename}`,
          `${uploadDir}/${resizedFilename}`
        );

        // update data
        pool.query(
          "UPDATE user SET gambar = ? WHERE uuid = ?",
          [resizedFilename, user_uuid],
          (error, results, fields) => {
            return res.json({ pesan: "sukses!" });
          }
        );
      } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
      }
    }
  );

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
    res.redirect("/login");
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
