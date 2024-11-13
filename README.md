# Простой Калькулятор

Это простое приложение-калькулятор, разработанное с использованием JavaScript, HTML и CSS. Программа выполняет основные арифметические операции: сложение, вычитание, умножение и деление. Каждый результат отображается в новом элементе на странице, который можно удалить, нажав на него.

## Демо

Попробовать калькулятор в действии можно [здесь](https://makarenkoooooo.github.io/calculator/).

## Особенности

- Поддерживает сложение, вычитание, умножение и деление.
- Каждый результат отображается в отдельном `div`, который появляется под калькулятором.
- Удаление результата по клику на него.

## Как это работает

Калькулятор принимает два числа из полей `<input>`, выбирает оператор из выпадающего списка `<select>`, а затем выводит результат операции в новом `div` при нажатии на кнопку "равно". Каждый новый `div` можно удалить, просто нажав на него.

## Обзор кода

Основной код JavaScript выглядит следующим образом:

```javascript
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
```

## Использованные технологии и методы
В этом проекте использованы:

- Основы работы с элементами DOM и манипуляции ими в JavaScript.
- Выполнение арифметических операций на основе введенных данных.
- Динамическое создание и удаление элементов на странице.
- Обработчик событий addEventListener для взаимодействия с элементами страницы.
