const express = require("express");
const router = express.Router();
const langarMenu = require("../data/langarMenu");

router.get("/", (req, res) => {
  res.json(langarMenu);
});

module.exports = router;
