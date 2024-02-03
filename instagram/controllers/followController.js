const { pool } = require("../utils/mysql");

const go_follow = (req, res) => {
  try {
    const user2 = req.body.user_uuid;
    const user1 = req.session.user.uuid;

    // insert
    pool.query(
      "INSERT INTO follow SET ?",
      {
        user1: user1,
        user2: user2,
      },
      (error, results, fields) => {
        if (error) throw error;
        res.json({ pesan: "sukses!" });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  go_follow,
};
