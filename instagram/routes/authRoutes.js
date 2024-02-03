const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/logout", authController.logout);
router.get("/session", authController.session);
router.get("/session_check", authController.session_check);

module.exports = router;
