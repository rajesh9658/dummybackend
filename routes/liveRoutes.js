const express = require("express");
const router = express.Router();
const liveData = require("../data/liveData");

router.get("/", (req, res) => {
  res.json(liveData);
});

module.exports = router;
