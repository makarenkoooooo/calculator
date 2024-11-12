const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const equalsBtn = document.getElementById("equals-btn");
const result = document.getElementById("result");

function operationResult() {
  if (operator.value === "+") {
    result.textContent = +num1.value + +num2.value;
  } else if (operator.value === "-") {
    result.textContent = +num1.value - +num2.value;
  } else if (operator.value === "*") {
    result.textContent = +num1.value * +num2.value;
  } else if (operator.value === "/") {
    result.textContent = +num1.value / +num2.value;
  }
}

equalsBtn.addEventListener("click", operationResult);
