// all buttons
const allButtons = document.querySelectorAll(".btn");

// operation
const operationPanelTextElement = document.querySelector(".operation");
const resultPanelTextElement = document.querySelector(".current-result");

const numberButtons = document.querySelectorAll(".btn-number");
const initialCheckedButtons = document.querySelectorAll(".btn-initial-checked");

// first-row
const btnPersentage = document.querySelector(".btn-persentage");
const btnReciprocal = document.querySelector(".btn-reciprocal");
const btnClear = document.querySelector(".btn-clear");
const btnDelete = document.querySelector(".btn-delete");

// second-row
const btnPow2 = document.querySelector(".btn-pow-2");
const btnPow3 = document.querySelector(".btn-pow-3");
const btnSqrt = document.querySelector(".btn-sqrt");
const btnDivide = document.querySelector(".btn-divide");

// third-row
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnTimes = document.querySelector(".btn-times");

// fourth-row
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btnMinus = document.querySelector(".btn-minus");

// fifth-row
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btnPlus = document.querySelector(".btn-plus");

// sixth-row
const btnPlusMinus = document.querySelector(".btn-plus-minus");
const btn0 = document.querySelector(".btn-0");
const btnComa = document.querySelector(".btn-coma");
const btnEquals = document.querySelector(".btn-equals");

let data = {
  operation: [],
  formula: [],
};

const calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult =
  () => {
    const evalResult = parseFloat(eval(data.formula.join("")).toFixed(10));
    data.operation = [evalResult];
    data.formula = [evalResult];
    operationPanelTextElement.innerText = evalResult;
    resultPanelTextElement.innerText = evalResult;
  };

const calculateMathExpressionForFormulaArrayAndUpdateResult = () => {
  const evalResult = parseFloat(eval(data.formula.join("")).toFixed(10));
  data.formula = [evalResult];
  resultPanelTextElement.innerText = evalResult;
};

const calculateSqrtAndUpdateArrays = () => {
  const formulaResult = parseFloat(eval(data.formula.join("")).toFixed(10));
  const sqrtNumber = Math.sqrt(formulaResult);

  data.operation = [`sqrt(${formulaResult})`];
  data.formula = [sqrtNumber];
};

const showResultsInOutputPanel = () => {
  operationPanelTextElement.textContent = data.operation.join("");
  resultPanelTextElement.textContent = data.formula.join("");
};

const calculateMathPow3AndShowResult = () => {
  calculateMathPowAndShowResult(3);
};

const calculateMathPow2AndShowResult = () => {
  calculateMathPowAndShowResult(2);
};

const calculateMathPowAndShowResult = (power) => {
  const result = Math.pow(eval(data.formula.join("")), power);
  data.formula = [result];
  calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
  showResultsInOutputPanel();
};

const clearArrays = () => {
  clearDataArrays();
};

const clearArraysAndPushZero = () => {
  clearDataArrays();
  pushToDataArrays(0);
};

const clearDataArrays = () => {
  data.operation = [];
  data.formula = [];
};

const pushToDataArrays = (value) => {
  data.operation.push(value);
  data.formula.push(value);
};

const createPrevNumberAndLastNumberInPersentageEquationClearOperationArray = (
  operatorSign
) => {
  const indexOfOperatorSign = data.operation.findIndex(
    (el) => el === operatorSign
  );
  const lastNumber = data.operation.slice(indexOfOperatorSign + 1).join("");
  data.operation = data.operation.slice(0, indexOfOperatorSign);
  const prevNumber = data.operation.join("").toString();
  data.operation = [];

  switch (operatorSign) {
    case "+":
      data.operation.push(
        `${prevNumber} + ${(Math.abs(prevNumber) * lastNumber) / 100}`
      );
      break;
    case "-":
      data.operation.push(
        `${prevNumber} - ${(Math.abs(prevNumber) * lastNumber) / 100}`
      );
      break;
    case "*":
      data.operation.push(`${prevNumber} * ${lastNumber / 100}`);
      break;
    case "/":
      data.operation.push(`${prevNumber} / ${lastNumber / 100}`);
      break;
    default:
      console.log("Error");
  }
};

const pushOperationArray = (e) => {
  const operatorMap = {
    "+/-": "-",
    "%": { "+": "+", "-": "-", x: "*", "/": "/" },
  };

  if (e.target.innerText in operatorMap) {
    const operatorSign = operatorMap[e.target.innerText];
    if (
      data.operation.includes(operatorSign) &&
      data.operation[data.operation.length - 1] !== operatorSign
    ) {
      data.operation = data.formula;
      createPrevNumberAndLastNumberInPersentageEquationClearOperationArray(
        operatorSign
      );
    } else {
      data.operation.push(operatorSign);
    }
  } else {
    data.operation.push(e.target.innerText);
  }
};

const pushFormulaArray = (e) => {
  const operatorMap = {
    x: "*",
    "+/-": "-",
    "%": { "+": "+", "-": "-", "*": "*", "/": "/" },
  };

  const buttonText = e.target.innerText;

  if (buttonText in operatorMap) {
    const operatorSign = operatorMap[buttonText];
    if (typeof operatorSign === "string") {
      data.formula.push(operatorSign);
    } else {
      const lastFormulaOperator = data.formula[data.formula.length - 1];
      if (
        data.formula.includes(lastFormulaOperator) &&
        lastFormulaOperator !== operatorSign[lastFormulaOperator]
      ) {
        data.formula = data.operation;
        const evalResult = eval(data.formula.join(""));
        data.formula = [eval(evalResult)];
      }
    }
  } else {
    data.formula.push(buttonText);
  }
};

const pushArraysAndShowOperation = (e) => {
  pushOperationArray(e);
  pushFormulaArray(e);
  showResultsInOutputPanel();
};

const deleteFirstIndexOfArrays = () => {
  data.formula.shift();
  data.operation.shift();
};

const deleteLastIndexOfArrays = () => {
  data.operation.pop();
  data.formula.pop();
};

const changeOperatorSign = (e) => {
  deleteLastIndexOfArrays();
  pushArraysAndShowOperation(e);
};

const pushDivideSignAndShowOperation = () => {
  data.operation.push("/");
  data.formula.push("/");
  showResultsInOutputPanel();
};

// PERSENTAGE BUTTON
btnPersentage.addEventListener("click", (e) => {
  if (isDataEmpty()) {
    return;
  }

  const operators = ["+", "-", "*", "/"];
  const lastFormulaChar = data.formula[data.formula.length - 1];

  if (
    operators.some(
      (operator) =>
        data.formula.includes(operator) && lastFormulaChar !== operator
    )
  ) {
    pushArraysAndShowOperation(e);
  }
});

const isDataEmpty = () =>
  data.formula.length === 0 && data.operation.length === 0;

// RECIPROCAL BUTTON
btnReciprocal.addEventListener("click", () => {
  const lastFormulaChar = data.formula[data.formula.length - 1];
  const lastOperationChar = data.operation[data.operation.length - 1];

  if (isOperator(lastFormulaChar) || isOperator(lastOperationChar)) {
    return;
  }

  if (hasOperatorInFormula()) {
    addParenthesesAndReciprocal();
  } else if (eval(data.formula.join("")) === 0 || isDataEmpty()) {
    handleDivisionByZeroError();
  } else if (
    resultPanelTextElement.textContent === "Cannot be divided by zero"
  ) {
    clearArrays();
    resultPanelTextElement.textContent = "Cannot be divided by zero";
  } else {
    calculateReciprocalAndUpdateResult();
  }
});

const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

const hasOperatorInFormula = () =>
  ["+", "-", "*", "/"].some((operator) => data.formula.includes(operator));

const addParenthesesAndReciprocal = () => {
  data.operation.unshift("(");
  data.operation.push(")");
  data.operation.unshift("1/");
  data.formula.unshift("(");
  data.formula.push(")");
  data.formula.unshift("1/");
  calculateMathExpressionForFormulaArrayAndUpdateResult();
  showResultsInOutputPanel();
};

const handleDivisionByZeroError = () => {
  calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
  operationPanelTextElement.textContent = "";
  resultPanelTextElement.textContent = "Cannot be divided by zero";
};

const calculateReciprocalAndUpdateResult = () => {
  const reciprocalNumber = eval(1 / data.formula.join(""));
  data.operation.push(`1/${data.operation.join("")}`);
  data.operation.splice(0, data.operation.length - 1);
  data.formula = [];
  data.formula.push(reciprocalNumber);
  calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
  showResultsInOutputPanel();
};

// ALL CLEAR BUTTON
btnClear.addEventListener("click", () => {
  clearArrays();
  operationPanelTextElement.textContent = "";
  resultPanelTextElement.textContent = "0";
});

// DELETE (BACKSPACE) BUTTON
btnDelete.addEventListener("click", () => {
  if (isDataEmpty()) {
    resultPanelTextElement.textContent = "0";
    return;
  }

  if (data.operation.length === 1) {
    updateArraysAfterDelete();
  } else {
    deleteLastIndexOfArrays();
  }

  showResultsInOutputPanel();
});

const updateArraysAfterDelete = () => {
  data.operation = data.formula.toString().split("");
  data.formula = data.formula.toString().split("");
  deleteLastIndexOfArrays();
};

// NUMBER BUTTONS
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberButtonClick);
});

const handleNumberButtonClick = (e) => {
  const buttonText = e.target.innerText;

  if (shouldClearArrays(buttonText)) {
    clearArrays();
    pushArraysAndShowOperation(buttonText);
  } else if (isSquareRootInOperation()) {
    resultPanelTextElement.textContent = "Choose operator sign";
  } else {
    pushArraysAndShowOperation(buttonText);
  }
};

const shouldClearArrays = (buttonText) =>
  (data.formula[0] == 0 ||
    data.operation[0] == 0 ||
    data.formula[0] === "-" ||
    data.operation[1] == 0) &&
  !data.formula.includes(".") &&
  buttonText === "0";

const isSquareRootInOperation = () => data.operation.join().includes("sqrt");

// POW 2 BUTTON
btnPow2.addEventListener("click", handlePow2ButtonClick);

const handlePow2ButtonClick = () => {
  if (endsWithOperatorOrEqualSign(data.formula)) {
    deleteLastIndexOfArrays();
    calculateMathPow2AndShowResult();
    return;
  }

  if (isEmptyFormulaAndOperation()) {
    initializeWithZero();
    showResultsInOutputPanel();
    return;
  }

  if (hasValidOperationAndFormula()) {
    clearOperationAndCalculatePow(2);
  } else {
    calculateMathPow2AndShowResult();
  }
};

const endsWithOperatorOrEqualSign = (formula) =>
  /[+\-*/=]$/.test(formula[formula.length - 1]);

const isEmptyFormulaAndOperation = () =>
  data.formula.length === 0 && data.operation.length === 0;

const initializeWithZero = () => {
  data.formula.push(0);
  data.operation.push(0);
};

const hasValidOperationAndFormula = () =>
  data.operation.length > 0 && data.formula.length > 0;

const clearOperationAndCalculatePow = (power) => {
  data.operation = [];
  const powNumber = Math.pow(eval(data.formula.join("")), power);
  data.operation.push(powNumber);
  data.formula = [];
  data.formula.push(powNumber);
  showResultsInOutputPanel();
};

// POW 3 BUTTON
btnPow3.addEventListener("click", (e) => {
  if (
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/" ||
    data.formula[data.formula.length - 1] === "="
  ) {
    deleteLastIndexOfArrays();
    calculateMathPow3AndShowResult();
    return;
  }
  if (data.formula.length === 0 && data.operation.length === 0) {
    data.formula.push(0);
    data.operation.push(0);
    showResultsInOutputPanel();
    return;
  }
  if (data.operation.length > 0 && data.formula.length > 0) {
    data.operation = [];
    const pow3Number = Math.pow(eval(data.formula.join("")), 3);
    data.operation.push(pow3Number);
    data.formula = [];
    data.formula.push(pow3Number);
    showResultsInOutputPanel();
    return;
  } else {
    calculateMathPow3AndShowResult();
    return;
  }
});

// SQRT BUTTON
btnSqrt.addEventListener("click", (e) => {
  if (data.formula.length === 0) {
    data.formula.push(0);
  } else if (
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/" ||
    data.formula[data.formula.length - 1] === "="
  ) {
    deleteLastIndexOfArrays();
    calculateSqrtAndUpdateArrays();
    showResultsInOutputPanel();
  } else if (eval(data.formula.join("").toString()) < 0) {
    resultPanelTextElement.textContent = "There is no square for number < 0";
  } else {
    calculateSqrtAndUpdateArrays();
    showResultsInOutputPanel();
  }
});

// DIVIDE BUTTON
btnDivide.addEventListener("click", (e) => {
  if (data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if (
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/" ||
    data.formula[data.formula.length - 1] === "="
  ) {
    changeOperatorSign(e);
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushDivideSignAndShowOperation();
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushDivideSignAndShowOperation();
  }
});

// MULTIPLICATION BUTTON
btnTimes.addEventListener("click", (e) => {
  if (data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if (
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/" ||
    data.formula[data.formula.length - 1] === "="
  ) {
    changeOperatorSign(e);
  } else if (data.formula[0] === "0" || data.formula[0] === 0) {
    clearArraysAndPushZero();
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushArraysAndShowOperation(e);
  }
});

// MINUS BUTTON
btnMinus.addEventListener("click", (e) => {
  if (data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if (
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/" ||
    data.formula[data.formula.length - 1] === "="
  ) {
    changeOperatorSign(e);
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushArraysAndShowOperation(e);
  }
});

// PLUS BUTTON
btnPlus.addEventListener("click", (e) => {
  eval(data.operation);
  eval(data.formula);
  if (data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if (
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/" ||
    data.formula[data.formula.length - 1] === "="
  ) {
    changeOperatorSign(e);
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushArraysAndShowOperation(e);
  }
});

// +/- BUTTON
btnPlusMinus.addEventListener("click", (e) => {
  if (
    data.operation[data.operation.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "-"
  ) {
    deleteLastIndexOfArrays();
  } else if (data.formula[0] === 0) {
    deleteFirstIndexOfArrays();
    pushArraysAndShowOperation(e);
  } else if (
    data.formula.length <= 1 &&
    data.operation.length <= 1 &&
    data.operation[0] > 0 &&
    data.formula[0] > 0
  ) {
    data.operation.unshift("-");
    data.formula.unshift("-");
    if (data.formula[0] === "-") {
      data.formula.slice(-1);
      operationPanelTextElement.textContent = data.operation.join("");
    }
  } else if (
    data.formula[0] === "-" &&
    data.operation[0] === "-" &&
    data.operation[1] < 0 &&
    data.formula[1] < 0
  ) {
    data.formula[1] = data.formula[1] * -1;
    data.operation[1] = data.operation[1] * -1;
    deleteFirstIndexOfArrays();
    data.formula = data.formula.push(data.operation[1] * -1);
  } else if (data.operation[0] < 0 && data.formula[0] < 0) {
    data.operation[0] = data.operation[0] * -1;
    data.formula[0] = data.formula[0] * -1;
    operationPanelTextElement.textContent = data.operation.join("");
  } else if (
    data.formula[0] === "-" &&
    data.formula.includes("+,-,x,/") !== -1
  ) {
    deleteFirstIndexOfArrays();
    operationPanelTextElement.textContent = data.operation.join("");
  } else if (data.formula.indexOf("+") === -1) {
    data.operation.unshift("-");
    data.formula.unshift("-");
    operationPanelTextElement.textContent = data.operation.join("");
  } else if (
    data.formula.length > 1 ||
    data.operation.length > 1 ||
    data.operation[data.operation.length - 1].indexOf("x") === 1 ||
    data.formula[data.formula.length - 1].indexOf("x") === 1
  ) {
    pushArraysAndShowOperation(e);
  } else {
    pushArraysAndShowOperation(e);
  }
  operationPanelTextElement.textContent = data.operation.join("");
});

// COMA BUTTON
btnComa.addEventListener("click", (e) => {
  if (data.operation.includes("+")) {
    const indexOfOperator = data.operation.indexOf("+");
    console.log(indexOfOperator);
    for (let i = indexOfOperator; i < data.operation.length; i++) {
      if (data.operation[i] === ".") {
        return;
      }
    }
  }
  if (
    data.operation[data.operation.length - 1] === "." ||
    data.formula[data.formula.length - 1] === "."
  ) {
    return;
  } else if (
    data.formula.length === 0 ||
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/"
  ) {
    data.formula.push(0);
    data.operation.push(0);
    pushArraysAndShowOperation(e);
  } else if (data.formula.includes(".") && data.formula.indexOf("+") === -1) {
    return;
  } else if (
    data.formula.length === 1 &&
    data.formula.includes(".") &&
    data.formula[data.formula.length - 1].includes("/") !== 1
  ) {
    return;
  } else if (
    data.formula.length > 1 &&
    data.formula[data.formula.length - 1].includes("/") === 1
  ) {
    pushArraysAndShowOperation(e);
  } else if (data.formula[0] % 1 !== 0 && data.formula.length === 1) {
    return;
  } else {
    pushArraysAndShowOperation(e);
  }
});

// EQUALS BUTTON
btnEquals.addEventListener("click", () => {
  if (
    data.formula[data.formula.length - 1] === "+" ||
    data.formula[data.formula.length - 1] === "-" ||
    data.formula[data.formula.length - 1] === "*" ||
    data.formula[data.formula.length - 1] === "/"
  ) {
    return;
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
  }
});

initialCheckedButtons.forEach((initButton) => {
  initButton.addEventListener("click", () => {
    if (data.formula[0] === 0 && data.operation[0] === 0) {
      clearArraysAndPushZero();
    }
  });
});

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("operation: " + data.operation);
    console.log("formula: " + data.formula);
    console.log("button: " + e.target.innerText);
  });
});
