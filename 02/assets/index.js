const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const setDate = () => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const hourDegrees = (360 / 12) * hour + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const minuteDegrees = (360 / 60) * minute + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const secondDegrees = (360 / 60) * second + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
};

setInterval(setDate, 1000);

setDate();
