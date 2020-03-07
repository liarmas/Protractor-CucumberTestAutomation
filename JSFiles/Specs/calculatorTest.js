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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculatorPageObject_1 = require("../pageObjects/calculatorPageObject");
describe("Super Calculator", function () {
    let calculatorPage = new calculatorPageObject_1.calculator();
    function Calculation(numberA, numberB, _operator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield calculatorPage.firstNumberTxtBox.sendKeys(numberA);
            yield calculatorPage.secondNumberTxtBox.sendKeys(numberB);
            // select the operator based on parameter '_operator'
            yield calculatorPage.getOperatorBy_operatorName(_operator);
            yield calculatorPage.getOperatorName.click();
            yield calculatorPage.goBtn.click();
        });
    }
    it(": Should Open the browser and go to Homepage URL", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield expect(protractor_1.browser.getTitle()).toEqual('Super Calculator');
    }));
    it(": Should Display right results given an operator", () => __awaiter(this, void 0, void 0, function* () {
        Calculation(10, 2, "DIVISION");
        yield protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (results) {
            expect(results).toBe('5');
        });
        // expect(true).toBe(true);
    }));
    it(": Should Close the browser", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.close();
        // expect(true).toBe(true);
    }));
});
//# sourceMappingURL=calculatorTest.js.map