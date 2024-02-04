const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/get_profil", userController.get_profil);

module.exports = router;
