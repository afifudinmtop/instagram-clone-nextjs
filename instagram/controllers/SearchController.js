const { pool } = require("../utils/mysql");

const search = async (req, res) => {
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
};

module.exports = {
  search,
};
