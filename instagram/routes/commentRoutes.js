const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController.js");

router.post("/get_list_comment", commentController.get_list_comment);
router.post("/send_comment", commentController.send_comment);

module.exports = router;
