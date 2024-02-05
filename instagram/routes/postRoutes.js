const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/feed", postController.feed);
router.get("/profil_feed", postController.profil_feed);
router.post("/post", postController.post);
router.get("/explore", postController.explore);
router.post("/user_feed", postController.user_feed);

module.exports = router;
