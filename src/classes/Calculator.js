class Calculator {
  constructor() {
    this.board = document.querySelector(".input");

    this.modePanel = document.querySelector(".mode");
    this.trigonometryPanel = document.querySelector(".trigonometry");
    this.mainPanel = document.querySelector(".main");

    this.mode = "standard";
  }

  createButtons = () => {
    let buttons = [];

    let modeButtons = [];
    let trigonometryButtons = [];
    let mainButtons = [];

    for (let i = 0; i < calcData.buttons.length; i++) {
      const btn = new Button(
        calcData.buttons[i].type,
        calcData.buttons[i].label,
        calcData.buttons[i].value,
        calcData.buttons[i].cssClass
      );
      const createdBtn = btn.draw();
      if (calcData.buttons[i].type === "mode") {
        modeButtons.push(btn);
      } else if (calcData.buttons[i].type === "trigonometry") {
        trigonometryButtons.push(btn);
      } else mainButtons.push(btn);
      this.board.append(createdBtn);
    }

    // switch (this.mode) {
    //   case "standard": {
    //     this.trigonometryPanel.classList.add("hide");
    //     const standardModeButtons = mainButtons.filter(
    //       (btn) => btn.mode !== "scientific"
    //     );
    //     this.mainPanel.append(standardModeButtons);
    //     break;
    //   }
    //   default: {
    //     this.trigonometryPanel.classList.remove("hide");
    //     this.mainPanel.append(standardModeButtons);
    //     break;
    //   }
    // }
    console.log("modeButtons", modeButtons);
    console.log("trigonometryButtons", trigonometryButtons);
    console.log("mainButtons", mainButtons);

    return buttons;
  };
}
