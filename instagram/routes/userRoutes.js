const express = require("express");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const router = express.Router();
const userController = require("../controllers/userController");
const { uploadDir } = require("../utils/uploadDir");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const filename = uuidv4() + "." + ext;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

router.get("/get_profil", userController.get_profil);
router.post("/get_user", userController.get_user);

router.post("/update_bio", userController.update_bio);
router.post("/update_username", userController.update_username);
router.post("/update_name", userController.update_name);

router.post(
  "/update_foto_profil/",
  upload.single("gambar"),
  userController.update_foto_profil
);

module.exports = router;
