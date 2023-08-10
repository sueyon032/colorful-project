const video = document.getElementById('myVideo');
const modeRed = document.getElementsByClassName("mode1")[0];
const modeGreen = document.getElementsByClassName("mode2")[0];
const modeBlue = document.getElementsByClassName("mode3")[0];

modeRed.onclick = () => {
    video.src = "red.mp4";
};
modeGreen.onclick = () => {
    video.src = "green.mp4";
};
modeBlue.onclick = () => {
    video.src = "blue.mp4";
};