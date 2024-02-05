const express = require("express");
const router = express.Router();
const dmController = require("../controllers/dmController.js");

router.post("/send_pesan", dmController.send_pesan);
router.post("/list_pesan", dmController.list_pesan);

module.exports = router;
