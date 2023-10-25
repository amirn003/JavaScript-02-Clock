
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand')

function setSecond() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360 ) +90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  console.log("Second: ", second);
}
setInterval(setSecond,1000);


function setMinute() {
  const now = new Date();
  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360 ) +90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  console.log("Minute: ", minute);
}

setInterval(setMinute,60000);
