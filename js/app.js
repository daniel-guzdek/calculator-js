// all buttons
const allButtons = document.querySelectorAll('.btn');

// operation
const operationPanelTextElement = document.querySelector('.operation');
const resultPanelTextElement = document.querySelector('.current-result');

const numberButtons = document.querySelectorAll('.btn-number');
const initialCheckedButtons = document.querySelectorAll('.btn-initial-checked');

// first-row
const btnPersentage = document.querySelector('.btn-persentage');
const btnReciprocal = document.querySelector('.btn-reciprocal');
const btnClear = document.querySelector('.btn-clear');
const btnDelete = document.querySelector('.btn-delete');

// second-row
const btnPow2 = document.querySelector('.btn-pow-2');
const btnPow3 = document.querySelector('.btn-pow-3');
const btnSqrt = document.querySelector('.btn-sqrt');
const btnDivide = document.querySelector('.btn-divide');

// third-row
const btn7 = document.querySelector('.btn-7');
const btn8 = document.querySelector('.btn-8');
const btn9 = document.querySelector('.btn-9');
const btnTimes = document.querySelector('.btn-times');

// fourth-row
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const btn6 = document.querySelector('.btn-6');
const btnMinus = document.querySelector('.btn-minus');

// fifth-row
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btnPlus = document.querySelector('.btn-plus');

// sixth-row
const btnPlusMinus = document.querySelector('.btn-plus-minus');
const btn0 = document.querySelector('.btn-0');
const btnComa = document.querySelector('.btn-coma');
const btnEquals = document.querySelector('.btn-equals');

let data = {
  operation: [],
  formula: []
}

const calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult = () => {
  let evalResult = eval(data.formula.join(''));
  data.operation = [];
  data.formula = [];
  data.operation.push(evalResult);
  data.formula.push(evalResult);
  operationPanelTextElement.innerText = evalResult;
  resultPanelTextElement.innerText = evalResult;
}

const calculateMathExpressionForFormulaArrayAndUpdateResult = () => {
  let evalResult = eval(data.formula.join(''));
  data.formula = [];
  data.formula.push(evalResult);
  resultPanelTextElement.innerText = evalResult;
}

const calculateSqrtAndUpdateArrays = () => {
  data.operation = [];
  const sqrtNumber = Math.sqrt(eval(data.formula.join('')));
  data.operation.push(`sqrt(${eval(data.formula.join(''))})`);
  data.formula = [];
  data.formula.push(sqrtNumber);
}

const showResultsInOutputPanel = () => {
  operationPanelTextElement.textContent = data.operation.join('');
  resultPanelTextElement.textContent = data.formula.join('');
}

const calculateMathPow3AndShowResult = () => {
  const pow3Number = Math.pow(eval(data.formula.join('')), 3);
  data.formula.splice(-1);
  data.formula.push(pow3Number);
  calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
  showResultsInOutputPanel();
}

const calculateMathPow2AndShowResult = () => {
  const pow2Number = Math.pow(eval(data.formula.join('')), 2);
  data.formula.splice(-1);
  data.formula.push(pow3Number);
  calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
  showResultsInOutputPanel();
}

const clearArrays = () => {
  data.operation = [];
  data.formula = [];
}

const clearArraysAndPushZero = () => {
  data.operation = [];
  data.formula = [];
  data.operation.push(0);
  data.formula.push(0);
}

const createPrevNumberAndLastNumberInPersentageEquationClearOperationArray = (operatorSign) => {
  const indexOfOperatorSign = data.operation.findIndex(el => el === operatorSign);
  const lastNumber = (data.operation.slice(indexOfOperatorSign + 1, data.operation[data.operation.length])).join('');
  data.operation = data.operation.splice(0, indexOfOperatorSign);
  const prevNumber = data.operation.join('').toString();
  data.operation = [];

  switch (true) {
    case operatorSign === "+":
      data.operation.push(`${prevNumber} + ${Math.abs(prevNumber) * lastNumber/100}`);
        break;
    case operatorSign === "-":
      data.operation.push(`${prevNumber} - ${Math.abs(prevNumber) * lastNumber/100}`);
        break;
    case operatorSign === "*":
      data.operation.push(`${prevNumber} * ${lastNumber/100}`);
        break;
    case operatorSign === "/":
      data.operation.push(`${prevNumber} / ${lastNumber/100}`);
        break;
    default:
      console.log("Error");
  }
}

const pushOperationArray = (e) => {
  if(e.target.innerText === '+/-') {
    data.operation.push('-');
  } else if(e.target.innerText === '%') {
    if(data.operation.includes('+') && data.operation[data.operation.length - 1] !== '+') {
      data.operation = data.formula;
      const operatorSign = "+";
      createPrevNumberAndLastNumberInPersentageEquationClearOperationArray(operatorSign);
    } else if(data.operation.includes('-') && data.operation[data.operation.length - 1] !== '-') {
      data.operation = data.formula;
      const operatorSign = "-";
      createPrevNumberAndLastNumberInPersentageEquationClearOperationArray(operatorSign);
    } else if(data.operation.includes('x') && data.operation[data.operation.length - 1] !== 'x') {
      data.operation = data.formula;
      const operatorSign = "*";
      createPrevNumberAndLastNumberInPersentageEquationClearOperationArray(operatorSign);
    } else if(data.operation.includes('/') && data.operation[data.operation.length - 1] !== '/') {
      data.operation = data.formula;
      const operatorSign = "/";
      createPrevNumberAndLastNumberInPersentageEquationClearOperationArray(operatorSign);
    }
  } else {
    data.operation.push(e.target.innerText);
  }
}

const pushFormulaArray = (e) => {
  if(e.target.innerText === 'x') {
    data.formula.push('*');
  } else if(e.target.innerText === '+/-') {
    data.formula.push('-');
  } else if(e.target.innerText === '%') {
    if((data.formula.includes('+') && data.formula[data.formula.length - 1] !== '+') || (data.formula.includes('-') && data.formula[data.formula.length - 1] !== '-') || (data.formula.includes('*') && data.formula[data.formula.length - 1] !== '*') || (data.formula.includes('/') && data.formula[data.formula.length - 1] !== '/')) {
      data.formula = data.operation;
      let evalResult = eval(data.formula.join(''));
      data.formula = [];
      data.formula.push(eval(evalResult));
    } 
  } else {
    data.formula.push(e.target.innerText);
  }
}

const pushArraysAndShowOperation = (e) => {
  pushOperationArray(e);
  pushFormulaArray(e);
  operationPanelTextElement.textContent = data.operation.join('');
}

const deleteFirstIndexOfArrays = () => {
  data.formula.splice(0, 1);
  data.operation.splice(0, 1);
}

const deleteLastIndexOfArrays = () => {
  data.operation.pop();
  data.formula.pop();
}

const changeOperatorSign = (e) => {
  deleteLastIndexOfArrays();
  pushArraysAndShowOperation(e);
}

const pushDivideSignAndShowOperation = () => {
  data.operation.push('/');
  data.formula.push('/');
  operationPanelTextElement.textContent = data.operation.join('');
}

// PERSENTAGE BUTTON
btnPersentage.addEventListener("click", (e) => {
  if(data.formula.length === 0 && data.operation.length === 0) {
    return;
  } else if((data.formula.includes('+') && data.formula[data.formula.length -1] !== '+') || (data.formula.includes('-') && data.formula[data.formula.length -1] !== '-') || (data.formula.includes('*') && data.formula[data.formula.length -1] !== '*') || (data.formula.includes('/') && data.formula[data.formula.length -1] !== '/')) {
    pushOperationArray(e);
    pushFormulaArray(e);
    showResultsInOutputPanel();
  } 
});

// RECIPROCAL BUTTON
btnReciprocal.addEventListener("click", () => {
  if(data.formula[data.formula.length -1] === '+' || data.formula[data.formula.length -1] === '-' || data.formula[data.formula.length -1] === '*' || data.formula[data.formula.length -1] === '/' || data.operation[data.operation.length -1] === '+' || data.operation[data.operation.length -1] === '-' || data.operation[data.operation.length -1] === '*' || data.operation[data.operation.length -1] === '/') {
    return;
  } else if(data.formula.includes('+') || data.formula.includes('-') || data.formula.includes('*') || data.formula.includes('/')) {
    data.operation.unshift('(');
    data.operation.push(')');
    data.operation.unshift('1/');
    data.formula.unshift('(');
    data.formula.push(')');
    data.formula.unshift('1/');
    calculateMathExpressionForFormulaArrayAndUpdateResult();
    showResultsInOutputPanel();
  } else if((eval(data.formula.join('')) === 0) || data.formula.length === 0 || data.formula[0] === 0) {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    operationPanelTextElement.textContent = '';
    resultPanelTextElement.textContent = 'Cannot be divided by zero';
  } else if(resultPanelTextElement.textContent === 'Cannot be divided by zero') {
    clearArrays();
    resultPanelTextElement.textContent = 'Cannot be divided by zero';
  } else {
    const reciprocalNumber = eval(1/data.formula.join(''));
    data.operation.push(`1/${data.operation.join('')}`);
    data.operation.splice(0, data.operation.length -1);
    data.formula = [];
    data.formula.push(reciprocalNumber);
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    showResultsInOutputPanel();
  }
});

// ALL CLEAR BUTTON
btnClear.addEventListener("click", () => {
  clearArrays();
  operationPanelTextElement.textContent = '';
  resultPanelTextElement.textContent = '0';
});

// DELETE (BACKSPACE) BUTTON
btnDelete.addEventListener("click", () => {
  if(data.operation.length === 0 && data.formula.length === 0) {
    resultPanelTextElement.textContent = 0;
    return;
  } else if(data.operation.length === 1) {
    data.operation = data.formula;
    data.operation = data.operation.toString();
    data.formula = data.formula.toString();
    data.operation = [...data.operation];
    data.formula = [...data.formula];
    deleteLastIndexOfArrays();
    showResultsInOutputPanel();
  } else {
    deleteLastIndexOfArrays();
    showResultsInOutputPanel();
  }
});

// NUMBER BUTTONS
numberButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    if(((data.formula[0] == 0 || data.operation[0] == 0) || (data.formula[0] === '-' || data.operation[1] == 0)) && (!data.formula.includes('.') && e.target.innerText === '0')) {
      clearArrays();
      pushArraysAndShowOperation(e);
    }
    else {
      pushArraysAndShowOperation(e);
    }
  })
});

// POW 2 BUTTON
btnPow2.addEventListener("click", (e) => {
  if(data.formula[data.formula.length - 1] === '+' || data.formula[data.formula.length - 1] === '-' || data.formula[data.formula.length - 1] === '*' || data.formula[data.formula.length - 1] === '/' || data.formula[data.formula.length - 1] === '=') {
    deleteLastIndexOfArrays();
    calculateMathPow2AndShowResult();
    return;
  } if(data.formula.length === 0 && data.operation.length === 0) {
    data.formula.push(0);
    data.operation.push(0);
    showResultsInOutputPanel();
    return;
  } if(data.operation.length > 0 && data.formula.length > 0) {
    data.operation = [];
    const pow2Number = Math.pow(eval(data.formula.join('')), 2);
    data.operation.push(pow2Number);
    data.formula = [];
    data.formula.push(pow2Number);
    showResultsInOutputPanel();
    return;
  } else {
    calculateMathPow2AndShowResult();
    return;
  }
});

// POW 3 BUTTON
btnPow3.addEventListener("click", (e) => {
  if(data.formula[data.formula.length - 1] === '+' || data.formula[data.formula.length - 1] === '-' || data.formula[data.formula.length - 1] === '*' || data.formula[data.formula.length - 1] === '/' || data.formula[data.formula.length - 1] === '=') {
    deleteLastIndexOfArrays();
    calculateMathPow3AndShowResult();
    return;
  } if(data.formula.length === 0 && data.operation.length === 0) {
    data.formula.push(0);
    data.operation.push(0);
    showResultsInOutputPanel();
    return;
  } if(data.operation.length > 0 && data.formula.length > 0) {
    data.operation = [];
    const pow3Number = Math.pow(eval(data.formula.join('')), 3);
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
  if(data.formula.length === 0) {
    data.formula.push(0);
  } else if(data.formula[data.formula.length - 1] === '+' || data.formula[data.formula.length - 1] === '-' || data.formula[data.formula.length - 1] === '*' || data.formula[data.formula.length - 1] === '/' || data.formula[data.formula.length - 1] === '=') {
    deleteLastIndexOfArrays();
    calculateSqrtAndUpdateArrays();
    showResultsInOutputPanel();
  } else if(eval(data.formula.join('').toString()) < 0) {
    resultPanelTextElement.textContent = "There is no square for number < 0";
  } 
  else {
    calculateSqrtAndUpdateArrays();
    showResultsInOutputPanel();
  }
});

// DIVIDE BUTTON
btnDivide.addEventListener("click", (e) => {
  if(data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if(data.formula[data.formula.length - 1] === '+' || data.formula[data.formula.length - 1] === '-' || data.formula[data.formula.length - 1] === '*' || data.formula[data.formula.length - 1] === '/' || data.formula[data.formula.length - 1] === '=') {
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
  if(data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if(data.formula[data.formula.length - 1] === '+' || data.formula[data.formula.length - 1] === '-' || data.formula[data.formula.length - 1] === '*' || data.formula[data.formula.length - 1] === '/' || data.formula[data.formula.length - 1] === '=') {
    changeOperatorSign(e);
  }
  else if(data.formula[0] === '0' || data.formula[0] === 0) {
    clearArraysAndPushZero();
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushArraysAndShowOperation(e);
  }
});

// MINUS BUTTON
btnMinus.addEventListener("click", (e) => {
  if(data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if(data.formula[data.formula.length - 1] === '+' || data.formula[data.formula.length - 1] === '-' || data.formula[data.formula.length - 1] === '*' || data.formula[data.formula.length - 1] === '/' || data.formula[data.formula.length - 1] === '=') {
    changeOperatorSign(e);
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushArraysAndShowOperation(e);
  }
});

// PLUS BUTTON
btnPlus.addEventListener("click", (e) => {
  if(data.formula.length === 0 || data.operation.length === 0) {
    return;
  } else if(data.formula[data.formula.length - 1] === '+' || data.formula[data.formula.length - 1] === '-' || data.formula[data.formula.length - 1] === '*' || data.formula[data.formula.length - 1] === '/' || data.formula[data.formula.length - 1] === '=') {
    changeOperatorSign(e);
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
    pushArraysAndShowOperation(e);
  }
});

// +/- BUTTON
btnPlusMinus.addEventListener("click", (e) => {
    if(data.operation[data.operation.length - 1] === '-' || data.formula[data.formula.length - 1] === '-') {
    deleteLastIndexOfArrays();
  } else if(data.formula[0] === 0) {
    deleteFirstIndexOfArrays();
    pushArraysAndShowOperation(e);
  }
  else if((data.formula.length <= 1 && data.operation.length <= 1 && data.operation[0] > 0 && data.formula[0] > 0)) {
    data.operation.unshift('-');
    data.formula.unshift('-');
    if((data.formula[0] === '-')) {
      data.formula.slice(-1);
      operationPanelTextElement.textContent = data.operation.join('');
    }
  } 
  else if((data.formula[0] === '-' && data.operation[0] === '-' && data.operation[1] < 0 && data.formula[1] < 0)) {
    data.formula[1] = data.formula[1] * -1;
    data.operation[1] = data.operation[1] * -1;
    deleteFirstIndexOfArrays();
    data.formula = data.formula.push(data.operation[1] * -1)
  }
  else if(data.operation[0] < 0 && data.formula[0] < 0) {
    data.operation[0] = data.operation[0] * -1
    data.formula[0] = data.formula[0] * -1
    operationPanelTextElement.textContent = data.operation.join('');
  } 
  else if((data.formula[0] === '-') && (data.formula.includes('+,-,x,/') !== -1)) {
    deleteFirstIndexOfArrays();
    operationPanelTextElement.textContent = data.operation.join('');
  }
  else if(data.formula.indexOf('+') === -1) {
    data.operation.unshift('-');
    data.formula.unshift('-');
    operationPanelTextElement.textContent = data.operation.join('');
  }
  else if(data.formula.length > 1 || data.operation.length > 1 || data.operation[data.operation.length - 1].indexOf('x') === 1 || data.formula[data.formula.length - 1].indexOf('x') === 1) {
    pushArraysAndShowOperation(e);
  }
  else {
    pushArraysAndShowOperation(e);
  }
  operationPanelTextElement.textContent = data.operation.join('');
});

// COMA BUTTON
btnComa.addEventListener("click", (e) => {
  if(data.operation[data.operation.length - 1] === '.' || data.formula[data.formula.length - 1] === '.') {
    deleteLastIndexOfArrays();
  } else if(data.formula.length === 0 || data.formula[data.formula.length -1] === '+' || data.formula[data.formula.length -1] === '-' || data.formula[data.formula.length -1] === '*' || data.formula[data.formula.length -1] === '/') {
    data.formula.push(0);
    data.operation.push(0);
    pushArraysAndShowOperation(e);
  }
  else if(data.formula.includes('.') && data.formula.indexOf('+') === -1) {
    return;
  } else if(data.formula.length === 1 && data.formula.includes('.') && data.formula[data.formula.length - 1].includes('/') !== 1) {
    return;
  } else if(data.formula.length > 1 && data.formula[data.formula.length - 1].includes('/') === 1) {
    pushArraysAndShowOperation(e);
  } else if(data.formula[0] % 1 !== 0 && data.formula.length === 1) {
    return;
  } else {
    pushArraysAndShowOperation(e);
  }
});

// EQUALS BUTTON
btnEquals.addEventListener("click", () => {
  if(data.formula[data.formula.length -1] === '+' || data.formula[data.formula.length -1] === '-' || data.formula[data.formula.length -1] === '*' || data.formula[data.formula.length -1] === '/') {
    return;
  } else {
    calculateMathExpressionClearOperationAndFormulaArraysAndUpdateResult();
  }
});

initialCheckedButtons.forEach(initButton => {
  initButton.addEventListener("click", () => {
    if(data.formula[0] === 0 && data.operation[0] === 0) {
      clearArraysAndPushZero();
    }
  })
});

allButtons.forEach( button => {
  button.addEventListener("click", (e) => {
    console.log('operation: ' + data.operation);
    console.log('formula: ' + data.formula);
    console.log('button: ' + e.target.innerText);
  });
});