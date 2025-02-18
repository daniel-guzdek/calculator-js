class Button {
  constructor(value, onClick) {
    this.value = value;
    this.onClick = onClick;
    this.element = this.createButton();
  }

  createButton() {
    const button = document.createElement("div");
    button.textContent = this.value;
    button.classList.add("btn");

    if (this instanceof NumericButton) {
      button.classList.add("btn-number");
    } else if (this instanceof FunctionButton) {
      button.classList.add("fn-btn");
    } else if (this instanceof OperatorButton) {
      button.classList.add("operator-btn");
    }

    button.addEventListener("click", () => this.onClick(this.value));
    return button;
  }
}
