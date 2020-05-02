const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("Permission to access webcam not accepted", err);
    });
};

const mirrorToCanvas = () => {
  const { videoWidth: width, videoHeight: height } = video;
  [canvas.width, canvas.height] = [width, height];

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height); // Start at [0,0] and paint width and height of video
  }, 16); // Every 16 milliseconds
};

getVideo();
