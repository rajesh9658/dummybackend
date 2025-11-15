const liveData = {
  isLive: false, // UPDATE THIS TO true when streaming

  currentStream: {
    title: "Sunday Diwan",
    subtitle: "Join us for weekly congregation",
  },

  platforms: [
    {
      id: "facebook",
      platform: "Facebook Live",
      icon: "📘",
      color: "#1877F2",
      url: "https://www.facebook.com/SSCFOviedo/live",
      viewers: 125,
      description: "Watch on Facebook Live with live chat"
    },
    {
      id: "youtube",
      platform: "YouTube",
      icon: "▶️",
      color: "#FF0000",
      url: "https://www.youtube.com/@SSCFGurudwara/live",
      viewers: 89,
      description: "HD quality stream with instant replay"
    }
  ],

  upcoming: [
    {
      title: "Sunday Diwan",
      date: "Every Sunday",
      time: "11:00 AM - 1:00 PM EST",
    },
    {
      title: "Gurpurab Special",
      date: "NOV 15, 2024",
      time: "10:00 AM - 2:00 PM EST",
    }
  ],

  pastStreams: [
    {
      title: "Last Sunday Diwan",
      date: "Nov 10, 2024",
      platform: "YouTube",
      url: "https://www.youtube.com/@SSCFGurudwara",
      duration: "1:45:00",
      views: "234",
    },
    {
      title: "Diwali Celebration 2024",
      date: "Nov 1, 2024",
      platform: "Facebook",
      url: "https://www.facebook.com/SSCFOviedo/videos",
      duration: "2:15:30",
      views: "456",
    }
  ]
};

module.exports = liveData;
