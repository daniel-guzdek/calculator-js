class Calculator {
  constructor() {
    this.display = new Display();
    this.currentValue = "";
    this.previousValue = "";
    this.operator = "";
    this.buttons = [
      new FunctionButton("sin", handleClick.bind(null, this)),
      new FunctionButton("cos", handleClick.bind(null, this)),
      new FunctionButton("tan", handleClick.bind(null, this)),
      new FunctionButton("cot", handleClick.bind(null, this)),
      new FunctionButton("%", handleClick.bind(null, this)),
      new FunctionButton("1/x", handleClick.bind(null, this)),
      new FunctionButton("AC", handleClick.bind(null, this)),
      new FunctionButton("⌫", handleClick.bind(null, this)),
      new FunctionButton("x^2", handleClick.bind(null, this)),
      new FunctionButton("x^3", handleClick.bind(null, this)),
      new FunctionButton("√", handleClick.bind(null, this)),
      new OperatorButton("÷", handleClick.bind(null, this)),
      new NumericButton("7", handleClick.bind(null, this)),
      new NumericButton("8", handleClick.bind(null, this)),
      new NumericButton("9", handleClick.bind(null, this)),
      new OperatorButton("×", handleClick.bind(null, this)),
      new NumericButton("4", handleClick.bind(null, this)),
      new NumericButton("5", handleClick.bind(null, this)),
      new NumericButton("6", handleClick.bind(null, this)),
      new OperatorButton("-", handleClick.bind(null, this)),
      new NumericButton("1", handleClick.bind(null, this)),
      new NumericButton("2", handleClick.bind(null, this)),
      new NumericButton("3", handleClick.bind(null, this)),
      new OperatorButton("+", handleClick.bind(null, this)),
      new FunctionButton("+/-", handleClick.bind(null, this)),
      new NumericButton("0", handleClick.bind(null, this)),
      new NumericButton(".", handleClick.bind(null, this)),
      new OperatorButton("=", handleClick.bind(null, this)),
    ];
  }
}
