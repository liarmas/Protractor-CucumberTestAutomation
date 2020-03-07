"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class calculator {
    constructor() {
        this.firstNumberTxtBox = protractor_1.element(protractor_1.by.model("first"));
        this.secondNumberTxtBox = protractor_1.element(protractor_1.by.model("second"));
        this.operatorElementsList = protractor_1.element.all(protractor_1.by.tagName("option"));
        this.goBtn = protractor_1.element(protractor_1.by.id("gobutton"));
    }
}
exports.calculator = calculator;
//# sourceMappingURL=calculatorPage.js.map