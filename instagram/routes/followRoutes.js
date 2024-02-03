const express = require("express");
const router = express.Router();
const followController = require("../controllers/followController");

router.post("/go_follow", followController.go_follow);

module.exports = router;
