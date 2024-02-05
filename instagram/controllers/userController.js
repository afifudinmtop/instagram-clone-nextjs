const { pool } = require("../utils/mysql");

const get_profil = async (req, res) => {
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
};

const get_user = async (req, res) => {
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
};

const update_bio = async (req, res) => {
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
};

const update_username = async (req, res) => {
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
};

const update_name = async (req, res) => {
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
};

module.exports = {
  get_profil,
  get_user,
  update_bio,
  update_username,
  update_name,
};
