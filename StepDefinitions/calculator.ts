import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { calculator } from "../pageObjects/calculatorPageObject";
import chai from "chai";

let calculatorPage = new calculator();
var expect = chai.expect;


When('I enter {string}, {string}, select {string} and click Go', function (numberA, numberB, operator) {
	makeCalculation(numberA, numberB, operator);
});


Then('I expect to get {string} as a result', async (result) => {
	await browser.sleep(5000);
	let pageResult = await calculatorPage.result.getText();
	await expect(result).to.equal(pageResult);
	await calculatorPage.getFirstResultTable().getText().then(function (tableResult) {
		expect(tableResult).to.equal(result);
	})
});


async function makeCalculation(numberA, numberB, _operator) {
	await calculatorPage.firstNumberTxtBox.sendKeys(numberA);
	await calculatorPage.secondNumberTxtBox.sendKeys(numberB);

	// select the operator based on parameter '_operator'
	await calculatorPage.getOperatorBy_operatorName(_operator).click();
	await calculatorPage.goBtn.click();
}