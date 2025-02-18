const clearAll = (calculator) => {
  calculator.currentValue = "";
  calculator.previousValue = "";
  calculator.operator = "";
};

const updateDisplay = (calculator) => {
  calculator.display.updateOperation(
    calculator.previousValue + " " + calculator.operator
  );
  calculator.display.updateResult(calculator.currentValue);
};

const appendNumber = (calculator, number) => {
  calculator.currentValue =
    calculator.currentValue.toString() + number.toString();
};

const appendComa = (calculator, value) => {
  if (!calculator.currentValue.includes(".")) {
    calculator.currentValue =
      calculator.currentValue.toString() + value.toString();
  }
};

const handleOperator = (calculator, operator) => {
  if (calculator.currentValue === "") return;
  if (calculator.previousValue !== "") {
    calculate(calculator);
  }
  calculator.operator = operator;
  calculator.previousValue = calculator.currentValue;
  calculator.currentValue = "";
};

const calculate = (calculator) => {
  let result;
  const prev = parseFloat(calculator.previousValue);
  const current = parseFloat(calculator.currentValue);
  if (isNaN(prev) || isNaN(current)) return;

  switch (calculator.operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "×":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
      return;
  }

  calculator.currentValue = result;
  calculator.operator = "";
  calculator.previousValue = "";
};

const toggleSign = (calculator) => {
  calculator.currentValue =
    calculator.currentValue.toString().charAt(0) === "-"
      ? calculator.currentValue.toString().slice(1)
      : "-" + calculator.currentValue;
};
