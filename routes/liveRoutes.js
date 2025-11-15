const express = require("express");
const router = express.Router();

// ---------------------------
// 🔴 LIVE STATUS (real-time)
// ---------------------------
let liveStatus = {
  isLive: false,
  title: "Not Live",
  viewers: {
    facebook: 0,
    youtube: 0
  }
};

// GET live status
router.get("/status", (req, res) => {
  res.json(liveStatus);
});

// POST update live status (for admin use)
router.post("/status", (req, res) => {
  const { isLive, title, viewers } = req.body;

  if (typeof isLive !== "undefined") liveStatus.isLive = isLive;
  if (title) liveStatus.title = title;
  if (viewers) liveStatus.viewers = viewers;

  res.json({ message: "Live status updated", liveStatus });
});

// ---------------------------
// 📅 UPCOMING STREAMS
// ---------------------------
let upcomingStreams = [
  {
    title: "Sunday Diwan",
    date: "Every Sunday",
    time: "11:00 AM – 1:00 PM EST",
  },
  {
    title: "Gurpurab Special",
    date: "November 15, 2025",
    time: "10:00 AM – 2:00 PM EST",
  },
];

router.get("/upcoming", (req, res) => {
  res.json(upcomingStreams);
});

// Admin update
router.post("/upcoming", (req, res) => {
  upcomingStreams = req.body;
  res.json({ message: "Upcoming streams updated", upcomingStreams });
});

// ---------------------------
// 🎥 PAST STREAMS
// ---------------------------
let pastStreams = [
  {
    title: "Diwali Celebration 2024",
    date: "Nov 1, 2024",
    platform: "YouTube",
    url: "https://youtube.com/..",
  },
  {
    title: "Last Sunday Diwan",
    date: "Nov 10, 2024",
    platform: "Facebook",
    url: "https://facebook.com/..",
  },
];

router.get("/past", (req, res) => {
  res.json(pastStreams);
});

router.post("/past", (req, res) => {
  pastStreams = req.body;
  res.json({ message: "Past streams updated", pastStreams });
});

module.exports = router;
