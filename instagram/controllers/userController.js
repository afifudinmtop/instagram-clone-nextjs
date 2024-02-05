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

module.exports = {
  get_profil,
  get_user,
  update_bio,
};
