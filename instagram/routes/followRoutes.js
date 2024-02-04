const express = require("express");
const router = express.Router();
const followController = require("../controllers/followController");

router.post("/go_follow", followController.go_follow);
router.post("/go_unfollow", followController.go_unfollow);

router.post("/get_list_following", followController.get_list_following);
router.post("/get_list_follower", followController.get_list_follower);

router.post("/cek_follow", followController.cek_follow);

module.exports = router;
