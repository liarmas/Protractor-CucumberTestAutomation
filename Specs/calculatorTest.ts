import { element, by, browser } from "protractor";
import { calculator } from "../pageObjects/calculatorPageObject";

describe("Super Calculator", function () {

    let calculatorPage = new calculator();

     async function Calculation(numberA, numberB, _operator) {
        await calculatorPage.firstNumberTxtBox.sendKeys(numberA);
        await calculatorPage.secondNumberTxtBox.sendKeys(numberB);

        // select the operator based on parameter '_operator'
        await calculatorPage.getOperatorBy_operatorName(_operator);       
        await calculatorPage.getOperatorName.click(); 
        await calculatorPage.goBtn.click();
    }

    it(": Should Open the browser and go to Homepage URL", async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it(": Should Display right results given an operator", async () => {
        Calculation(10, 2, "DIVISION");
        await element(by.repeater("result in memory")).element(
            by.css("td:nth-child(3)")).getText().then(function (results) {
                expect(results).toBe('5');
            })
        // expect(true).toBe(true);
    });

    it(": Should Close the browser", async ()=> {
        await browser.close();
        // expect(true).toBe(true);
    });
});