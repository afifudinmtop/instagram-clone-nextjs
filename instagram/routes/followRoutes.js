const express = require("express");
const router = express.Router();
const followController = require("../controllers/followController");

router.post("/go_follow", followController.go_follow);
router.post("/go_unfollow", followController.go_unfollow);

router.post("/get_list_following", followController.get_list_following);

module.exports = router;
