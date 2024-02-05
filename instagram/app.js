const express = require("express");
const session = require("express-session");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = 3000;

const mysql = require("mysql");
const cors = require("cors");

// import routes
const authRoutes = require("./routes/authRoutes");
const followRoutes = require("./routes/followRoutes");
const searchRoutes = require("./routes/searchRoutes");
const statsRoutes = require("./routes/statsRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const likeRoutes = require("./routes/likeRoutes");

nextApp.prepare().then(() => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

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
  app.use("/api/like", likeRoutes);

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

  // Semua request lain akan di-handle oleh Next.js
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
