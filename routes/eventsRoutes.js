const express = require("express");
const router = express.Router();
const eventsData = require("../data/eventsData");

// All events
router.get("/", (req, res) => {
    const event = eventsData[0];
    console.log(typeof event.id);
  res.json(eventsData);
});

// Event by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Requested event ID:", id);
  console.log("Type:", typeof req.params.id);

  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    console.log("Event not found for ID:", id);
    return res.status(404).json({ message: "Event not found", id });
  }

  console.log("Found event:", event.title);
  res.json(event);
});

module.exports = router;
