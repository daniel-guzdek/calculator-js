class OperatorButton extends Button {
  constructor(value, onClick) {
    super(value, onClick);
    this.element.classList.add("operator-btn");
  }
}
