
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand')

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360 ) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360 ) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  console.log("Second: ", second);
}
setInterval(setDate,1000);
