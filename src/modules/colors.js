// Generate a random number

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const COLORS = ['#E40ABF', '#0AE455', '#E4C60A', '#FF4B4B'];

const getRandomColor = function () {
  let randomColor = COLORS[getRandomInt(COLORS.length)];
  return randomColor;
};

export default {
  getRandomColor
};