const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

router.get("/", (req, res) => {
  res.render("pages/files");
});

router.get("/directories", fileController.getFiles);

router.post("/writeFile", fileController.writeFile);
router.delete("/deleteFile", fileController.deleteFile);

module.exports = router;
