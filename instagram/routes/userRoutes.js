const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/get_profil", userController.get_profil);
router.post("/get_user", userController.get_user);

router.post("/update_bio", userController.update_bio);
router.post("/update_username", userController.update_username);
router.post("/update_name", userController.update_name);

module.exports = router;
