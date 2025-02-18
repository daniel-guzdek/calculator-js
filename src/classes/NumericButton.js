class NumericButton extends Button {
  constructor(value, onClick) {
    super(value, onClick);
    this.element.classList.add("btn-number");
  }
}
