let hour, min, sec;
const setTime = document.querySelectorAll("input");
const btnStart = document.querySelector(".start");
const btnReset = document.querySelector(".reset");

// timer 입력시 발생하는 이벤트
setTime.forEach((x) =>
  x.addEventListener("change", () => {
    hour = document.querySelector("#startHour").value;
    min = document.querySelector("#startMin").value;
    sec = document.querySelector("#startSec").value;
    btnStart.innerHTML = `
        <img src="./img/start-default.png" alt="btn-start">`;
    btnReset.innerHTML = `
        <img src="./img/reset-default.png" alt="btn-reset">`;
  })
);

// Start Button
btnStart.addEventListener("click", () => {
  timer = setInterval(cntTimer(hour, min, sec), 1000);
});

// Reset Button
btnReset.addEventListener("click", () => {
  reset();
});

// 타이머 함수(미완성 ㅠㅡㅠ)
function cntTimer(h, m, s) {
  console.log("timer start!", h, m, s);
  if (s.value !== 0) {
    s--;
    sec = document.querySelector("#startSec");
    sec.textContent = s;
  } else {
    if (m.value !== 0) {
      m--;
      min = document.querySelector("#startMin");
      min.textContent = 59;
    }
  }
}

// 리셋 함수
function reset() {
  hour = document.querySelector("#startHour");
  min = document.querySelector("#startMin");
  sec = document.querySelector("#startSec");
  hour.value = "00";
  min.value = "00";
  sec.value = "00";
}
