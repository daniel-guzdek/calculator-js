class Button {
  constructor(type, label, value, cssClass) {
    this.type = type;
    this.label = label;
    this.value = value;
    this.cssClass = cssClass;
  }

  draw() {
    const btn = document.createElement("button");
    btn.setAttribute("class", this.cssClass);
    btn.innerHTML = this.label;
    return btn;
  }
}
