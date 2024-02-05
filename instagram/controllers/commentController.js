const { pool } = require("../utils/mysql");
const { v4: uuidv4 } = require("uuid");

const get_list_comment = async (req, res) => {
  const post_uuid = req.body.post_uuid;

  try {
    // get data
    pool.query(
      `
      SELECT 
      user.uuid AS uuid_user, 
      user.username AS username, 
      user.gambar AS gambar, 
      comment.uuid AS uuid_comment, 
      comment.text AS text, 
      comment.ts AS ts  

      FROM comment 
      JOIN user ON comment.uuid_user = user.uuid 
      WHERE comment.uuid_post = ?;
      `,
      [post_uuid],
      (error, results, fields) => {
        if (results.length < 1) {
          return res.json([]);
        } else {
          return res.json(results);
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const send_comment = async (req, res) => {
  try {
    const uuid_user = req.session.user.uuid;
    const text = req.body.text;
    const uuid_post = req.body.uuid_post;
    const uuid = uuidv4();

    // Simpan data ke MySQL
    pool.query(
      "INSERT INTO comment SET ?",
      {
        uuid: uuid,
        uuid_post: uuid_post,
        uuid_user: uuid_user,
        text: text,
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
  get_list_comment,
  send_comment,
};
