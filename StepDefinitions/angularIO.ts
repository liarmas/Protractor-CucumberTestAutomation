import { When, Then } from "cucumber";
import { angularIO } from "../pageObjects/angularIOPageObject";
import { browser } from "protractor";
import chai from "chai";

let angularIOHomePage = new angularIO();
var expect = chai.expect;

When('I click on {string} link', async (link) => {
    // Write code here that turns the phrase above into concrete actions
    switch (link) {
        case "angular.io": {
            await angularIOHomePage.angularLink.click();
            break;
        }
    }
});

Then('I expect to see {string} page', async (pageName) => {
    // Write code here that turns the phrase above into concrete actions
    let pageTitle = await browser.getTitle();
    await expect(pageTitle).to.equal(pageName);

});

When('I enter {string} on the Search textbox', async (searchCriteria) => {
    // Write code here that turns the phrase above into concrete actions
    await angularIOHomePage.searchTxtBox.sendKeys(searchCriteria);
    await browser.sleep(5000);
});

Then('I expect to see matching results', async () => {
    // Write code here that turns the phrase above into concrete actions
    let searchResults = await angularIOHomePage.searchResultsArea;
    await expect(searchResults.length).to.equal(2);
});