const express = require("express");
const router = express.Router();
const specialEvents = require("../data/specialEvents");

router.get("/", (req, res) => {
  res.json(specialEvents);
});

module.exports = router;
