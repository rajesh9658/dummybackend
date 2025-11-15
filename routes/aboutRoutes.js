const express = require("express");
const router = express.Router();
const aboutData = require("../data/aboutData");

router.get("/", (req, res) => {
  res.json(aboutData);
});

module.exports = router;
