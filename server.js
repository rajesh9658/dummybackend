const express = require("express");
const cors = require("cors");

const scheduleRoutes = require("./routes/scheduleRoutes");
const specialEventsRoutes = require("./routes/specialEventsRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const notificationsRoute = require("./routes/notifications");

const app = express();
app.use(cors());
app.use(express.json());

//serve images 
app.use("/images", express.static("images"));

// Routes
app.use("/api/weekly-schedule", scheduleRoutes);
app.use("/api/special-events", specialEventsRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/about-us", require("./routes/aboutRoutes"));
app.use("/api/langar-menu", require("./routes/langarMenuRoutes"));
app.use("/api/live", require("./routes/liveRoutes"));
app.use("/api/notifications", notificationsRoute);


// Root check
app.get("/", (req, res) => {
  res.send("SSCF Backend is running ✔");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
