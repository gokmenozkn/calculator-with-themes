const circles = document.querySelectorAll(".circle");
const calcScreen = document.getElementById("screen");
const calcBody = document.querySelector(".main__body");
const calcHead = document.querySelector(".main__header");
const keypad = document.querySelector(".bar");

circles.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    var current = document.getElementsByClassName("active");

    if (circle.classList.contains("active")) return;
    
    current[0].classList.remove("active");
    circle.classList.add("active");
  });
});

function Theme1(e) {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  calcScreen.style.backgroundColor = "hsl(224, 36%, 15%)";
  calcScreen.style.color = "#fff"
  calcBody.style.backgroundColor = "hsl(223, 31%, 20%)";
  calcHead.style.color = "#fff";
  keypad.style.backgroundColor = "hsl(223, 31%, 20%)";

  numberButtons.forEach(item => {
    item.style.backgroundColor = "hsl(30, 25%, 89%)";
    item.style.boxShadow = "0 4px hsl(28, 16%, 65%)";
    item.style.color = "hsl(221, 14%, 31%)";
  });
  operands.forEach(item => {
    item.style.backgroundColor = "hsl(30, 25%, 89%)";
    item.style.boxShadow = "0 4px hsl(28, 16%, 65%)";
    item.style.color = "hsl(221, 14%, 31%)";
  });

  resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
  resetButton.style.boxShadow = "0 4px hsl(224, 28%, 35%)";

  deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)";
  deleteButton.style.boxShadow = "0 4px hsl(224, 28%, 35%)";

  equalButton.style.background = "hsl(6, 63%, 50%)";
  equalButton.style.boxShadow = "0 4px hsl(6, 70%, 34%)";
  equalButton.style.color = "#fff";
}

function Theme2() {
  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  calcScreen.style.backgroundColor = "hsl(0, 0%, 93%)";
  calcScreen.style.color = "black"
  calcBody.style.backgroundColor = "hsl(0, 5%, 81%)";
  calcHead.style.color = "hsl(60, 10%, 19%)";
  keypad.style.backgroundColor = "hsl(0, 5%, 81%)";

  numberButtons.forEach(item => {
    item.style.backgroundColor = "hsl(45, 7%, 89%)";
    item.style.boxShadow = "0 4px hsl(35, 11%, 61%)";
    item.style.color = "hsl(60, 10%, 19%)";
  });
  operands.forEach(item => {
    item.style.backgroundColor = "hsl(45, 7%, 89%)";
    item.style.boxShadow = "0 4px hsl(35, 11%, 61%)";
    item.style.color = "hsl(60, 10%, 19%)";
  });

  resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  resetButton.style.boxShadow = "0 4px hsl(185, 58%, 25%)";

  deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  deleteButton.style.boxShadow = "0 4px hsl(185, 58%, 25%)";

  equalButton.style.background = "hsl(25, 98%, 40%)";
  equalButton.style.boxShadow = "0 4px hsl(25, 99%, 27%)";
  equalButton.style.color = "#fff";
}

function Theme3(e) {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  calcScreen.style.backgroundColor = "hsl(268, 71%, 12%)";
  calcScreen.style.color = "hsl(52, 100%, 62%)";
  calcBody.style.backgroundColor = "hsl(268, 71%, 12%)";
  calcHead.style.color = "hsl(52, 100%, 62%)";
  keypad.style.backgroundColor = "hsl(268, 71%, 12%)";

  numberButtons.forEach(item => {
    item.style.backgroundColor = "hsl(268, 47%, 21%)";
    item.style.boxShadow = "0 4px hsl(290, 70%, 36%)";
    item.style.color = "hsl(52, 100%, 62%)";
  });
  operands.forEach(item => {
    item.style.backgroundColor = "hsl(268, 47%, 21%)";
    item.style.boxShadow = "0 4px hsl(290, 70%, 36%)";
    item.style.color = "hsl(52, 100%, 62%)";
  });

  resetButton.style.background = "hsl(281, 89%, 26%)";
  deleteButton.style.background = "hsl(281, 89%, 26%)";
  resetButton.style.boxShadow = "0 4px hsl(285, 91%, 52%)";
  deleteButton.style.boxShadow = "0 4px hsl(285, 91%, 52%)";
  equalButton.style.background = "hsl(176, 100%, 44%)";
  equalButton.style.boxShadow = "0 4px hsl(177, 92%, 70%)";
  equalButton.style.color = "hsl(198, 20%, 13%)";
}

circles[0].addEventListener("click", Theme1);
circles[1].addEventListener("click", Theme2);
circles[2].addEventListener("click", Theme3);