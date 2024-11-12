# Простой Калькулятор

Простое приложение-калькулятор, разработанное на JavaScript, HTML и CSS. Программа выполняет основные арифметические операции: сложение, вычитание, умножение и деление.

## Демо

Попробовать калькулятор в действии можно [здесь](https://makarenkoooooo.github.io/calculator/).

## Особенности

- Поддерживает сложение, вычитание, умножение и деление.
- Мгновенно вычисляет результат на основе введённых данных.

## Как это работает

Данный проект представляет собой простую реализацию калькулятора с использованием чистого JavaScript. Приложение получает данные из двух полей `<input>`, выбирает оператор из `<select>` и рассчитывает результат при нажатии на кнопку "равно".

## Обзор кода

Основной код JavaScript выбирает элементы по их ID:

```javascript
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const equalsBtn = document.getElementById("equals-btn");
const result = document.getElementById("result");
Функциональность
Функция operationResult выполняет вычисление в зависимости от выбранного оператора:

Если оператор "+", выполняется сложение.
Если оператор "-", из num1 вычитается num2.
Если оператор "*", выполняется умножение.
Если оператор "/", выполняется деление num1 на num2.
Результат вычисления отображается в элементе result:

javascript
Копировать код
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
Кнопка "равно" использует обработчик событий для запуска функции operationResult:

javascript
equalsBtn.addEventListener("click", operationResult);
## Что вы изучите

Изучая этот проект, можно освоить:

- Работу с элементами DOM и обработчиками событий в JavaScript.
- Выполнение простых арифметических операций в JavaScript.
- Использование метода addEventListener для взаимодействия с пользователем.
- Динамическое обновление содержимого на веб-странице.

## Требования
Базовые знания HTML, CSS и JavaScript.

