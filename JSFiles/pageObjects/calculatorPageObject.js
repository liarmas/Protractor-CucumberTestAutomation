"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class calculator {
    constructor() {
        this.firstNumberTxtBox = protractor_1.element(protractor_1.by.model("first"));
        this.secondNumberTxtBox = protractor_1.element(protractor_1.by.model("second"));
        this.goBtn = protractor_1.element(protractor_1.by.id("gobutton"));
        this.result = protractor_1.element(protractor_1.by.css("h2[class='ng-binding']"));
    }
    getOperatorBy_operatorName(operator) {
        return protractor_1.element(protractor_1.by.css("select[ng-model='operator'] option[value= " + operator + "]"));
    }
    getFirstResultTable() {
        return protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
    }
    //#region Properties
    get firstNumberTxtBox() {
        return this._firstNumberTxtBox;
    }
    set firstNumberTxtBox(value) {
        this._firstNumberTxtBox = value;
    }
    get secondNumberTxtBox() {
        return this._secondNumberTxtBox;
    }
    set secondNumberTxtBox(value) {
        this._secondNumberTxtBox = value;
    }
    get goBtn() {
        return this._goBtn;
    }
    set goBtn(value) {
        this._goBtn = value;
    }
    get getOperatorName() {
        return this._getOperatorName;
    }
    set getOperatorName(value) {
        this._getOperatorName = value;
    }
    get result() {
        return this._result;
    }
    set result(value) {
        this._result = value;
    }
}
exports.calculator = calculator;
//# sourceMappingURL=calculatorPageObject.js.map