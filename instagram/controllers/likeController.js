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

const go_unlike = async (req, res) => {
  try {
    const user = req.body.user_uuid;
    const post = req.body.post_uuid;

    // insert
    pool.query(
      "DELETE FROM likes WHERE user = ? AND post = ?",
      [user, post],
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

const get_list_like = async (req, res) => {
  const post_uuid = req.body.post_uuid;

  try {
    // get data
    pool.query(
      `
      SELECT 
      user.uuid AS uuid, 
      user.name AS name, 
      user.username AS username, 
      user.gambar AS gambar 

      FROM likes 
      JOIN user ON likes.user = user.uuid 
      WHERE likes.post = ?;
      `,
      [post_uuid],
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
  go_like,
  go_unlike,
  get_list_like,
};
