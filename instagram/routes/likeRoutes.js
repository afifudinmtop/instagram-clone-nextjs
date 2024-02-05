const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

router.post("/go_like", likeController.go_like);

module.exports = router;
