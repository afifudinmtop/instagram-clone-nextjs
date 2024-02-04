const express = require("express");
const router = express.Router();
const statsController = require("../controllers/statsController");

router.post("/", statsController.get_stats);

module.exports = router;
