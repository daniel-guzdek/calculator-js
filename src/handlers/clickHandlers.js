const handleClick = (calculator, value) => {
  switch (value) {
    case "sin":
      calculator.currentValue = Math.sin(toRadians(calculator.currentValue));
      break;
    case "cos":
      calculator.currentValue = Math.cos(toRadians(calculator.currentValue));
      break;
    case "tan":
      calculator.currentValue = Math.tan(toRadians(calculator.currentValue));
      break;
    case "cot":
      calculator.currentValue =
        1 / Math.tan(toRadians(calculator.currentValue));
      break;
    case "%":
      calculator.currentValue = parseFloat(calculator.currentValue) / 100;
      break;
    case "1/x":
      calculator.currentValue = 1 / parseFloat(calculator.currentValue);
      break;
    case "AC":
      clearAll(calculator);
      break;
    case "⌫":
      calculator.currentValue = calculator.currentValue.toString().slice(0, -1);
      break;
    case "x^2":
      calculator.currentValue = Math.pow(calculator.currentValue, 2);
      break;
    case "x^3":
      calculator.currentValue = Math.pow(calculator.currentValue, 3);
      break;
    case "√":
      calculator.currentValue = Math.sqrt(calculator.currentValue);
      break;
    case "÷":
    case "×":
    case "-":
    case "+":
      handleOperator(calculator, value);
      break;
    case "=":
      calculate(calculator);
      break;
    case "7":
    case "8":
    case "9":
    case "4":
    case "5":
    case "6":
    case "1":
    case "2":
    case "3":
    case "0":
      appendNumber(calculator, value);
      break;
    case ".":
      appendComa(calculator, value);
    case "+/-":
      toggleSign(calculator);
      break;
    default:
      break;
  }
  updateDisplay(calculator);
};
