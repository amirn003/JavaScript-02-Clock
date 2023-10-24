
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360 ) +90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  console.log(second);
}

setInterval(setDate,1000);
