class FunctionButton extends Button {
  constructor(value, onClick) {
    super(value, onClick);
    this.element.classList.add("fn-btn");
  }
}
