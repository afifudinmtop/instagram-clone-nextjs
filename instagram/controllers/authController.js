const { pool } = require("../utils/mysql");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
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
};

module.exports = {
  login,
};
