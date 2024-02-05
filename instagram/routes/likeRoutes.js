const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

router.post("/go_like", likeController.go_like);
router.post("/go_unlike", likeController.go_unlike);

module.exports = router;
