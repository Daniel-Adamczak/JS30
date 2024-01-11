const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const rangeInputs = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

const togglePlayHandler = () => {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
};

const skipBtnHandler = (e) => {
  video.currentTime += Number(e.target.dataset.skip);
};

const progressBarHandler = () => {
  const percentValue = (video.currentTime / video.duration) * 100;

  progressBar.style.flexBasis = `${percentValue}%`;
};

const progressChangeHandler = (e) => {
  video.currentTime = (video.duration * e.offsetX) / progress.offsetWidth;
};
let ifMouseDown = false;
const progressDragHandler = (e) => {
  if (ifMouseDown) {
    progressChangeHandler(e);
  }
};

const toggleFullScreen = () => {
  if (!video.fullscreen) {
    video.requestFullscreen();
    console.dir(video);
  }
  else{
    video.exitFullscreen()
  }
};

fullscreen.addEventListener('click', toggleFullScreen);
progress.addEventListener('mousedown', (e) => (ifMouseDown = true));
progress.addEventListener('mouseup', (e) => (ifMouseDown = false));
progress.addEventListener('mousemove', (e) => progressDragHandler(e));
progress.addEventListener('click', (e) => progressChangeHandler(e));
video.addEventListener('timeupdate', progressBarHandler);
video.addEventListener('click', togglePlayHandler);
skipButtons.forEach((Btn) => Btn.addEventListener('click', skipBtnHandler));
toggle.addEventListener('click', togglePlayHandler);
