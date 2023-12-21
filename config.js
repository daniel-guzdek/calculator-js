const data = {
  buttons: [
    {
      type: "mode",
      name: "standard",
      label: "standard &#x1f5a9",
      value: "standard",
      cssClass: "btn btn-mode btn-mode-standard",
      visibleInStdMode: true,
      handler: handleStandardMode(),
    },
    {
      type: "mode",
      name: "scientific",
      label: "scientific &#x1f9ea",
      value: "scientific",
      cssClass: "btn btn-mode btn-mode-scientific",
      visibleInStdMode: true,
      handler: handleScientificMode(),
    },

    // trigonometry

    {
      type: "trigonometry",
      name: "sin",
      label: "sin",
      value: null,
      cssClass: "btn btn-mode btn-sin",
      visibleInStdMode: false,
      handler: handleSin(),
    },
    {
      type: "trigonometry",
      name: "arcsin",
      label: "arcsin",
      value: null,
      cssClass: "btn btn-mode btn-arcsin",
      visibleInStdMode: false,
      handler: handleArcSin(),
    },
    {
      type: "trigonometry",
      name: "sin-n",
      label: "sin<sup><var>n</var></sup>",
      value: null,
      cssClass: "btn btn-mode btn-sin-n",
      visibleInStdMode: false,
      handler: handleSinN(),
    },
    {
      type: "trigonometry",
      name: "sinh",
      label: "sin<var>h</var>",
      value: null,
      cssClass: "btn btn-mode btn-sinh",
      visibleInStdMode: false,
      handler: handleSinH(),
    },
    {
      type: "trigonometry",
      name: "cos",
      label: "cos",
      value: null,
      cssClass: "btn btn-mode btn-cos",
      visibleInStdMode: false,
      handler: handleCos(),
    },
    {
      type: "trigonometry",
      name: "arccos",
      label: "arccos",
      value: null,
      cssClass: "btn btn-mode btn-arccos",
      visibleInStdMode: false,
      handler: handleArcCos(),
    },
    {
      type: "trigonometry",
      name: "cos-n",
      label: "cos<sup><var>n</var></sup>",
      value: null,
      cssClass: "btn btn-mode btn-cos-n",
      visibleInStdMode: false,
      handler: handleCosN(),
    },
    {
      type: "trigonometry",
      name: "cosh",
      label: "cos<var>h</var>",
      value: null,
      cssClass: "btn btn-mode btn-cosh",
      visibleInStdMode: false,
      handler: handleCosH(),
    },
    {
      type: "trigonometry",
      name: "tan",
      label: "tan",
      value: null,
      cssClass: "btn btn-mode btn-tan",
      visibleInStdMode: false,
      handler: handleTan(),
    },
    {
      type: "trigonometry",
      name: "arctan",
      label: "arctan",
      value: null,
      cssClass: "btn btn-mode btn-arctan",
      visibleInStdMode: false,
      handler: handleArcTan(),
    },
    {
      type: "trigonometry",
      name: "tan-n",
      label: "tan<sup><var>n</var></sup>",
      value: null,
      cssClass: "btn btn-mode btn-tan-n",
      visibleInStdMode: false,
      handler: handleTanN(),
    },
    {
      type: "trigonometry",
      name: "tanh",
      label: "tan<var>h</var>",
      value: null,
      cssClass: "btn btn-mode btn-tanh",
      visibleInStdMode: false,
      handler: handleTanH(),
    },
    {
      type: "trigonometry",
      name: "cot",
      label: "cot",
      value: null,
      cssClass: "btn btn-mode btn-cot",
      visibleInStdMode: false,
      handler: handleCot(),
    },
    {
      type: "trigonometry",
      name: "arccot",
      label: "arccot",
      value: null,
      cssClass: "btn btn-mode btn-arccot",
      visibleInStdMode: false,
      handler: handleArcCot(),
    },
    {
      type: "trigonometry",
      name: "cot-n",
      label: "cot<sup><var>n</var></sup>",
      value: null,
      cssClass: "btn btn-mode btn-cot-n",
      visibleInStdMode: false,
      handler: handleCotN(),
    },
    {
      type: "trigonometry",
      name: "coth",
      label: "cot<var>h</var>",
      value: null,
      cssClass: "btn btn-mode btn-coth",
      visibleInStdMode: false,
      handler: handleCotH(),
    },
    {
      type: "trigonometry",
      name: "sec",
      label: "sec",
      value: null,
      cssClass: "btn btn-mode btn-sec",
      visibleInStdMode: false,
      handler: handleSec(),
    },
    {
      type: "trigonometry",
      name: "arcsec",
      label: "arcsec",
      value: null,
      cssClass: "btn btn-mode btn-arcsec",
      visibleInStdMode: false,
      handler: handleArcSec(),
    },
    {
      type: "trigonometry",
      name: "sec-n",
      label: "sec<sup><var>n</var></sup>",
      value: null,
      cssClass: "btn btn-mode btn-sec-n",
      visibleInStdMode: false,
      handler: handleSecN(),
    },
    {
      type: "trigonometry",
      name: "sech",
      label: "sec<var>h</var>",
      value: null,
      cssClass: "btn btn-mode btn-sech",
      visibleInStdMode: false,
      handler: handleSecH(),
    },
    {
      type: "trigonometry",
      name: "csc",
      label: "csc",
      value: null,
      cssClass: "btn btn-mode btn-csc",
      visibleInStdMode: false,
      handler: handleCsc(),
    },
    {
      type: "trigonometry",
      name: "arccsc",
      label: "arccsc",
      value: null,
      cssClass: "btn btn-mode btn-arccsc",
      visibleInStdMode: false,
      handler: handleArcCsc(),
    },
    {
      type: "trigonometry",
      name: "csc-n",
      label: "csc<sup><var>n</var></sup>",
      value: null,
      cssClass: "btn btn-mode btn-csc-n",
      visibleInStdMode: false,
      handler: handleCscN(),
    },
    {
      type: "trigonometry",
      name: "csch",
      label: "csc<var>h</var>",
      value: null,
      cssClass: "btn btn-mode btn-csch",
      visibleInStdMode: false,
      handler: handleCscH(),
    },

    // digits

    {
      type: "digit",
      name: "digit-0",
      label: "0",
      value: 0,
      cssClass: "btn btn-num btn-0",
      visibleInStdMode: true,
      handler: handle0(),
    },
    {
      type: "digit",
      name: "digit-1",
      label: "1",
      value: 1,
      cssClass: "btn btn-num btn-1",
      visibleInStdMode: true,
      handler: handle1(),
    },
    {
      type: "digit",
      name: "digit-2",
      label: "2",
      value: 2,
      cssClass: "btn btn-num btn-2",
      visibleInStdMode: true,
      handler: handle2(),
    },
    {
      type: "digit",
      name: "digit-3",
      label: "3",
      value: 3,
      cssClass: "btn btn-num btn-3",
      visibleInStdMode: true,
      handler: handle3(),
    },
    {
      type: "digit",
      name: "digit-4",
      label: "4",
      value: 4,
      cssClass: "btn btn-num btn-4",
      visibleInStdMode: true,
      handler: handle4(),
    },
    {
      type: "digit",
      name: "digit-5",
      label: "5",
      value: 5,
      cssClass: "btn btn-num btn-5",
      visibleInStdMode: true,
      handler: handle5(),
    },
    {
      type: "digit",
      name: "digit-6",
      label: "6",
      value: 6,
      cssClass: "btn btn-num btn-6",
      visibleInStdMode: true,
      handler: handle6(),
    },
    {
      type: "digit",
      name: "digit-7",
      label: "7",
      value: 7,
      cssClass: "btn btn-num btn-7",
      visibleInStdMode: true,
      handler: handle7(),
    },
    {
      type: "digit",
      name: "digit-8",
      label: "8",
      value: 8,
      cssClass: "btn btn-num btn-8",
      visibleInStdMode: true,
      handler: handle8(),
    },
    {
      type: "digit",
      name: "digit-9",
      label: "9",
      value: 9,
      cssClass: "btn btn-num btn-9",
      visibleInStdMode: true,
      handler: handle9(),
    },
    // operators
    {
      type: "operator",
      name: "plus",
      label: "+",
      value: "+",
      cssClass: "btn btn-operator btn-plus",
      visibleInStdMode: true,
      handler: handlePlus(),
    },
    {
      type: "operator",
      name: "minus",
      label: "-",
      value: "-",
      cssClass: "btn btn-operator btn-minus",
      visibleInStdMode: true,
      handler: handleMinus(),
    },
    {
      type: "operator",
      name: "multiplication",
      label: "\xD7",
      value: "*",
      cssClass: "btn btn-operator btn-multiplication",
      visibleInStdMode: true,
      handler: handleMultiplication(),
    },
    {
      type: "operator",
      name: "divide",
      label: "\xF7",
      value: "/",
      cssClass: "btn btn-operator btn-division",
      visibleInStdMode: true,
      handler: handleDivision(),
    },
    {
      type: "operator",
      name: "equals",
      label: "=",
      value: "=",
      cssClass: "btn btn-operator btn-equal",
      visibleInStdMode: true,
      handler: handleEqual(),
    },
    // signs

    {
      type: "sign",
      name: "coma",
      label: ".",
      value: ".",
      cssClass: "btn btn-sign btn-coma",
      visibleInStdMode: true,
      handler: handleComa(),
    },
    {
      type: "sign",
      name: "plus-minus",
      label: "\xB1",
      value: null,
      cssClass: "btn btn-sign btn-plus-minus",
      visibleInStdMode: true,
      handler: handlePlusMinus(),
    },
    {
      type: "sign",
      name: "parenthesis-left",
      label: "(",
      value: "(",
      cssClass: "btn btn-sign btn-parenthesis-left",
      visibleInStdMode: false,
      handler: handleParenthesisLeft(),
    },
    {
      type: "sign",
      name: "parenthesis-right",
      label: ")",
      value: ")",
      cssClass: "btn btn-sign btn-parenthesis-right",
      visibleInStdMode: false,
      handler: handleParenthesisRight(),
    },

    // functional buttons

    {
      type: "functional",
      name: "btn-pow-2",
      label: "x\u00B2",
      value: null,
      cssClass: "btn btn-fn btn-x-pow-2",
      visibleInStdMode: true,
      handler: handleXPowOf2(),
    },
    {
      type: "functional",
      name: "btn-pow-3",
      label: "x\u00B3",
      value: null,
      cssClass: "btn btn-fn btn-x-pow-3",
      visibleInStdMode: true,
      handler: handleXPowOf3(),
    },
    {
      type: "functional",
      name: "sqrt",
      label: "\u221A",
      value: null,
      cssClass: "btn btn-fn btn-sqrt",
      visibleInStdMode: true,
      handler: handleSqrtRoot(),
    },
    {
      type: "functional",
      name: "cube-root",
      label: "\u221B",
      value: null,
      cssClass: "btn btn-fn btn-cube-root",
      visibleInStdMode: true,
      handler: handleCubeRoot(),
    },
    {
      type: "functional",
      name: "y-root-of-x",
      label: "<sup>y</sup>\u221Ax",
      value: null,
      cssClass: "btn btn-fn btn-y-root-of-x",
      visibleInStdMode: false,
      handler: handleYRootOfX(),
    },
    {
      type: "functional",
      name: "ln",
      label: "ln",
      value: null,
      cssClass: "btn btn-fn btn-ln",
      visibleInStdMode: false,
      handler: handleNaturalLogarithm(),
    },
    {
      type: "functional",
      name: "log",
      label: "log",
      value: null,
      cssClass: "btn btn-fn btn-log",
      visibleInStdMode: false,
      handler: handleLogarithm(),
    },
    {
      type: "functional",
      name: "log-base-y-of-x",
      label: "log<sub>y</sub><var>x</var>",
      value: null,
      cssClass: "btn btn-fn btn-log-base-y-of-x",
      visibleInStdMode: false,
      handler: handleLogarithmBaseYOfX(),
    },
    {
      type: "functional",
      name: "e-pow-x",
      label: "e<sup>x</sup>",
      value: null,
      cssClass: "btn btn-fn btn-e-pow-x",
      visibleInStdMode: false,
      handler: handleEPowOfX(),
    },
    {
      type: "functional",
      name: "10-pow-x",
      label: "10<sup>x</sup>",
      value: null,
      cssClass: "btn btn-fn btn-10-pow-x",
      visibleInStdMode: false,
      handler: handle10PowOfX(),
    },
    {
      type: "functional",
      name: "2-pow-x",
      label: "2<sup>x</sup>",
      value: null,
      cssClass: "btn btn-fn btn-2-pow-x",
      visibleInStdMode: false,
      handler: handle2PowOfX(),
    },
    {
      type: "functional",
      name: "x-pow-y",
      label: "x<sup>y</sup>",
      value: null,
      cssClass: "btn btn-fn btn-x-pow-y",
      visibleInStdMode: false,
      handler: handleXPowOfY(),
    },
    {
      type: "functional",
      name: "factorial",
      label: "<var>n!</var>",
      value: null,
      cssClass: "btn btn-fn btn-factorial",
      visibleInStdMode: false,
      handler: handleFactorial(),
    },
    {
      type: "functional",
      name: "exp",
      label: "exp",
      value: null,
      cssClass: "btn btn-fn btn-exp",
      visibleInStdMode: false,
      handler: handleExp(),
    },
    {
      type: "functional",
      name: "mod",
      label: "mod",
      value: null,
      cssClass: "btn btn-fn btn-mod",
      visibleInStdMode: false,
      handler: handleMod(),
    },
    {
      type: "functional",
      name: "reciprocal",
      label: "1/x",
      value: null,
      cssClass: "btn btn-fn btn-reciprocal",
      visibleInStdMode: true,
      handler: handleReciprocal(),
    },
    {
      type: "functional",
      name: "percentage",
      label: "%",
      value: null,
      cssClass: "btn btn-fn btn-percentage",
      visibleInStdMode: true,
      handler: handlePercentage(),
    },
    {
      type: "functional",
      name: "abs",
      label: "|<var>x</var>|",
      value: null,
      cssClass: "btn btn-fn btn-abs",
      visibleInStdMode: false,
      handler: handleAbs(),
    },
    {
      type: "functional",
      name: "ac",
      label: "AC",
      value: null,
      cssClass: "btn btn-fn btn-ac",
      visibleInStdMode: true,
      handler: handleAllClear(),
    },
    {
      type: "functional",
      name: "delete",
      label: "&#x2190;",
      value: null,
      cssClass: "btn btn-fn btn-delete",
      visibleInStdMode: true,
      handler: handleDelete(),
    },

    // constants

    {
      type: "constant",
      name: "e",
      label: "<var>e</var>",
      value: null,
      cssClass: "btn btn-fn btn-e",
      visibleInStdMode: false,
      handler: handleE(),
    },
    {
      type: "constant",
      name: "pi",
      label: "<var>&#x3C0</var>",
      value: null,
      cssClass: "btn btn-fn btn-pi",
      visibleInStdMode: false,
      handler: handlePi(),
    },
  ],
};
