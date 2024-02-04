const { pool } = require("../utils/mysql");

const get_stats = async (req, res) => {
  try {
    let user;
    if (req.body.user_uuid == "mine") {
      user = req.session.user.uuid;
    } else {
      user = req.body.user_uuid;
    }

    let jumlah_post = 0;
    let follower = 0;
    let following = 0;

    // get jumlah_post
    pool.query(
      "SELECT COUNT(*) AS jumlah_post FROM post WHERE user = ?",
      [user],
      (error, results, fields) => {
        jumlah_post = results[0].jumlah_post;

        // get following
        pool.query(
          "SELECT COUNT(*) AS following FROM follow WHERE user1 = ?",
          [user],
          (error, results, fields) => {
            following = results[0].following;

            // get follower
            pool.query(
              "SELECT COUNT(*) AS follower FROM follow WHERE user2 = ?",
              [user],
              (error, results, fields) => {
                follower = results[0].follower;

                return res.json({ jumlah_post, follower, following });
              }
            );
          }
        );
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  get_stats,
};
