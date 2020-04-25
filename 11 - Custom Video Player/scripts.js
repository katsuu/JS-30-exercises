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

const toggleIcon = (e) => {
  const icon = e.currentTarget.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
};

const skip = (e) => {
  console.log(e.currentTarget.dataset.skip);
  video.currentTime += parseFloat(e.currentTarget.dataset.skip);
};

const handleRange = (e) => {
  video[e.currentTarget.name] = e.currentTarget.value;
};

const handleProgress = (e) => {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
};

// Hook up event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", toggleIcon);
video.addEventListener("pause", toggleIcon);

toggle.addEventListener("click", togglePlay);

progress.addEventListener("click", handleProgress);

skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("click", handleRange));
ranges.forEach((range) => range.addEventListener("mousemove", handleRange));
