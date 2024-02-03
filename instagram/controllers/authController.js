const { pool } = require("../utils/mysql");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

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

// register
const register = async (req, res) => {
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
              gambar: "avatar.png",
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
};

module.exports = {
  login,
  register,
};
