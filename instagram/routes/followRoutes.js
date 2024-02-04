const express = require("express");
const router = express.Router();
const followController = require("../controllers/followController");

router.post("/go_follow", followController.go_follow);
router.post("/go_unfollow", followController.go_unfollow);

module.exports = router;
