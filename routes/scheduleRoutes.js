const express = require("express");
const router = express.Router();
const weeklySchedule = require("../data/weeklySchedule");

router.get("/", (req, res) => {
  res.json(weeklySchedule);
});

module.exports = router;
