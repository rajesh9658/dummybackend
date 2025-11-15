// routes/notifications.js
const express = require("express");
const router = express.Router();

let notifications = [
  {
    id: 1,
    title: "Weekly Diwan",
    message: "Please join the Diwan this Sunday at 11:00 AM",
    date: "Today",
  },
  {
    id: 2,
    title: "Langar Seva",
    message: "Volunteers needed for Langar Seva",
    date: "Yesterday",
  },
];

// Get notifications
router.get("/", (req, res) => {
  res.json({ success: true, notifications });
});

// Add new notification
router.post("/", (req, res) => {
  const { title, message } = req.body;

  const newNotification = {
    id: Date.now(),
    title,
    message,
    date: "Just now",
  };

  notifications.unshift(newNotification);
  res.json({ success: true, notification: newNotification });
});

module.exports = router;
