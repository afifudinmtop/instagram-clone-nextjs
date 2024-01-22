const express = require("express");
const session = require("express-session");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = 3000;

nextApp.prepare().then(() => {
  const app = express();

  // Konfigurasi express-session
  app.use(
    session({
      secret: "uhuy", // Ganti dengan rahasia sesi yang sebenarnya
      resave: false,
      saveUninitialized: true,
      cookie: { secure: !dev }, // Gunakan 'secure: true' di produksi dengan HTTPS
    })
  );

  // API route
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

  // Rute Login
  app.get("/api/login", (req, res) => {
    // Contoh pengaturan user ke sesi
    req.session.user = { name: "User1", isLoggedIn: true };
    res.send("Anda telah login");
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

  // Semua request lain akan di-handle oleh Next.js
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
