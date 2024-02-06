const mysql = require("mysql");

// Konfigurasi MySQL
const pool = mysql.createPool({
  host: "mysql", //ubah ke localhost (untuk normal) atau mysql (untuk docker)
  user: "admin",
  password: "admin",
  database: "instagram",
});

module.exports = {
  pool,
};
