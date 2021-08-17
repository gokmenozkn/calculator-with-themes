const numberButtons = document.querySelectorAll("button[data-value]");
const screen = document.getElementById("screen");
const equalButton = document.getElementById("equal");
const resetButton = document.getElementById("reset");
const operands = document.querySelectorAll("button[data-operand]");
const deleteButton = document.getElementById("delete");

let STORED = "";
let INDEX;

var re = /[/*-+]/

class Calculator {
  static changeScreen(value) {
    const regex = /\d/;

    if (!regex.test(STORED) && value === "0") return;
    if ((!regex.test(STORED) && value === ".") || 
        (STORED.includes(".") && value === ".")) return;

    STORED += value;
    screen.value = STORED;
  }

  static reset() {
    STORED = "";
    screen.value = STORED;
  }

  static addOperand(operand) {
    const regex = /\d/;
    var op = operand;

    if (STORED.includes(operand)) return;
    if (operand !== "-" && !regex.test(STORED)) return;
    if (re.test(STORED)) return;

    STORED += op;
    screen.value = STORED;
  }

  static calculate() {
    if (STORED !== "") {
      var result = eval(STORED);
      screen.value = result;
    }
    STORED = "";
  }

  static delete() {
    INDEX = STORED.length;
    var text = STORED.substring(0, INDEX - 1);
    STORED = text;
    screen.value = STORED;
    if (STORED === "") return;
    console.log(STORED)
  }
}

numberButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    Calculator.changeScreen(item.getAttribute("data-value"));
  });
});

resetButton.addEventListener("click", (e) => {
  Calculator.reset();
});

operands.forEach((item) => {
  item.addEventListener("click", (e) => {
    Calculator.addOperand(item.getAttribute("data-operand"));
  });
});

equalButton.addEventListener("click", (e) => {
  Calculator.calculate();
});

deleteButton.addEventListener("click", () => {
  Calculator.delete()
});