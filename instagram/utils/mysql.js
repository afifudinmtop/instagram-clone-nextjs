const mysql = require("mysql");

// Konfigurasi MySQL
const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "instagram",
});

module.exports = {
  pool,
};
