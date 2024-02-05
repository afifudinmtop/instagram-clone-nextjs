const { pool } = require("../utils/mysql");

const go_like = async (req, res) => {
  try {
    const user = req.body.user_uuid;
    const post = req.body.post_uuid;

    // insert
    pool.query(
      "INSERT INTO likes SET ?",
      {
        user: user,
        post: post,
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
  go_like,
};
