const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/feed", postController.feed);

module.exports = router;
