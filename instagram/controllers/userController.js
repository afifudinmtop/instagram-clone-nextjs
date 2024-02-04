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

module.exports = {
  get_profil,
};
