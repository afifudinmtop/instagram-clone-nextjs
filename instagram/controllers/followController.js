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

const go_unfollow = async (req, res) => {
  try {
    const user1 = req.session.user.uuid;
    const user2 = req.body.user_uuid;

    // insert
    pool.query(
      "DELETE FROM follow WHERE user1 = ? AND user2 = ?",
      [user1, user2],
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

const get_list_following = async (req, res) => {
  const user_uuid = req.body.user_uuid;

  try {
    // get data
    pool.query(
      `SELECT user.* 
        FROM user 
        JOIN follow ON user.uuid = follow.user2 
        WHERE follow.user1 = ?;`,
      [user_uuid],
      (error, results, fields) => {
        res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const get_list_follower = async (req, res) => {
  const user_uuid = req.body.user_uuid;

  try {
    // get data
    pool.query(
      `SELECT user.* 
      FROM user 
      JOIN follow ON user.uuid = follow.user1 
      WHERE follow.user2 = ?;`,
      [user_uuid],
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
  go_follow,
  go_unfollow,
  get_list_following,
  get_list_follower,
};
