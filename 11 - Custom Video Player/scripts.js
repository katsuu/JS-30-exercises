// Get elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll(".player__button");
const ranges = player.querySelectorAll(".player__slider");

// Create functions
const togglePlay = (e) => {
  video.paused ? video.play() : video.pause();
};

// Hook up event listeners
toggle.addEventListener("click", togglePlay);
