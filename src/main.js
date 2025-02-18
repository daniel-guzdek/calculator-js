const calculator = new Calculator();
const calculatorButtonsContainer = document.getElementById("input");

calculator.buttons.forEach((button) => {
  calculatorButtonsContainer.appendChild(button.element);
});
