class Display {
  constructor() {
    this.operationElement = document.querySelector(".operation");
    this.currentResultElement = document.querySelector(".result");
  }

  updateOperation(content) {
    this.operationElement.textContent = content;
  }

  updateResult(content) {
    this.currentResultElement.textContent = content;
  }
}
