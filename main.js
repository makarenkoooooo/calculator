const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const equalsBtn = document.getElementById("equals-btn");

function operationResult() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("result");

  // Проверяем оператор и выполняем соответствующую операцию
  if (operator.value === "+") {
    newDiv.textContent = +num1.value + +num2.value;
  } else if (operator.value === "-") {
    newDiv.textContent = +num1.value - +num2.value;
  } else if (operator.value === "*") {
    newDiv.textContent = +num1.value * +num2.value;
  } else if (operator.value === "/") {
    newDiv.textContent = +num1.value / +num2.value;
  }

  // Добавляем обработчик события для удаления `div` при клике
  newDiv.addEventListener("click", () => {
    newDiv.remove();
  });

  document.body.appendChild(newDiv);
}

equalsBtn.addEventListener("click", operationResult);
