"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculatorPageObject_1 = require("../pageObjects/calculatorPageObject");
const chai_1 = __importDefault(require("chai"));
let calculatorPage = new calculatorPageObject_1.calculator();
var expect = chai_1.default.expect;
cucumber_1.When('I enter {string}, {string}, select {string} and click Go', function (numberA, numberB, operator) {
    makeCalculation(numberA, numberB, operator);
});
cucumber_1.Then('I expect to get {string} as a result', (result) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    let pageResult = yield calculatorPage.result.getText();
    yield expect(result).to.equal(pageResult);
    yield calculatorPage.getFirstResultTable().getText().then(function (tableResult) {
        expect(tableResult).to.equal(result);
    });
}));
function makeCalculation(numberA, numberB, _operator) {
    return __awaiter(this, void 0, void 0, function* () {
        yield calculatorPage.firstNumberTxtBox.sendKeys(numberA);
        yield calculatorPage.secondNumberTxtBox.sendKeys(numberB);
        // select the operator based on parameter '_operator'
        yield calculatorPage.getOperatorBy_operatorName(_operator).click();
        yield calculatorPage.goBtn.click();
    });
}
//# sourceMappingURL=calculator.js.map