// var minutes = document.getElementById("minutes");
// var seconds = document.getElementById("seconds");

// function countDownTimer() {
//   const countDownDate = new Date("04/18/2023").getTime();

//   const second = 1000;
//   const minute = second * 60;

//   const interval = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = countDownDate - now;

//     days.innerText = formatNumber(Math.floor(distance % day));
//     hours.innerText = formatNumber(Math.floor((distance % day) / hour));
//     minutes.innerText = formatNumber(Math.floor((distance % hour) / minute));
//     seconds.innerText = formatNumber(Math.floor((distance % minute) / second));
//   }, 1000);
// }

// function formatNumber(number) {
//   if (number < 10) {
//     return "0" + number;
//   }
//   return number;
// }

let timeLeft = 600;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  //   document.getElementById("timer").textContent = `${minutes}:${seconds}`;
  document.getElementById(
    "timer"
  ).textContent = `${minutes} mins : ${seconds} secs`;
}

function countdown() {
  updateTimer();
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    alert("Time is up!");
  } else {
    timeLeft--;
  }
}

const timerInterval = setInterval(countdown, 1000);
