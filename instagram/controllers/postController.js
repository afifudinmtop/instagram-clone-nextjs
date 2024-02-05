const { pool } = require("../utils/mysql");

const feed = async (req, res) => {
  try {
    const user_uuid = req.session.user.uuid;

    // get data
    pool.query(
      `
            SELECT 
                post.uuid AS post_uuid, 
                post.gambar AS post_gambar, 
                post.caption AS post_caption, 
                post.ts AS post_ts, 
                user.uuid AS user_uuid, 
                user.username AS user_username, 
                user.gambar AS user_gambar, 
                IF(likes.id IS NOT NULL, 'yes', 'no') AS likes 
            FROM post 
            JOIN follow ON post.user = follow.user2 
            JOIN user ON post.user = user.uuid 
            LEFT JOIN likes ON post.uuid = likes.post AND likes.user = ? 
            WHERE follow.user1 = ? 
            ORDER BY RAND();
            `,
      [user_uuid, user_uuid],
      (error, results, fields) => {
        res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const profil_feed = async (req, res) => {
  try {
    const user_uuid = req.session.user.uuid;

    // get data
    pool.query(
      "SELECT * FROM post WHERE user = ?",
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

const post = async (req, res) => {
  try {
    const uuid = req.body.uuid;

    // get data
    pool.query(
      `SELECT 
            post.uuid AS post_uuid, 
            post.gambar AS post_gambar, 
            post.caption AS post_caption, 
            post.ts AS post_ts, 
            user.uuid AS user_uuid, 
            user.username AS user_username, 
            user.gambar AS user_gambar
    
            FROM post
    
            JOIN user ON post.user = user.uuid
    
            WHERE post.uuid = ?;`,
      [uuid],
      (error, results, fields) => {
        res.json(results);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const explore = async (req, res) => {
  const user_uuid = req.session.user.uuid;

  try {
    // get data
    pool.query(
      `SELECT * FROM post WHERE user != ? ORDER BY RAND() LIMIT 100;`,
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

const user_feed = async (req, res) => {
  try {
    const user_uuid = req.body.user_uuid;

    pool.query(
      "SELECT * FROM post WHERE user = ? ORDER BY id DESC",
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
  feed,
  profil_feed,
  post,
  explore,
  user_feed,
};
