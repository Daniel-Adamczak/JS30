const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

setInterval(updateTime, 1000);

function updateTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  console.log(hours, ':', minutes, ':', seconds);
  
  hourHand.style.transform = `rotate(${90 + hours * (360 / 12)}deg)`;
  minuteHand.style.transform = `rotate(${90 + minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`;
}
