import { browser } from "protractor";
import { angularIO } from "../pageObjects/angularIOPageObject";

describe("AngularIO Home Page", function () {

    let angularIOHomePage = new angularIO();

	it(": Should Open the browser and go to AngularIO Homepage URL from AngularJS", async () => {
		await browser.get('https://angularjs.org');
		await expect(browser.getTitle()).toEqual(
            'AngularJS — Superheroic JavaScript MVW Framework');
        await angularIOHomePage.angularLink.click();
        await expect(browser.getTitle()).toEqual(
            'Angular');
    });
    
    it(": Should validate Search funtionality", async () => {
        await angularIOHomePage.searchTxtBox.sendKeys("Hello");
        await browser.sleep(5000);
        let searchResults = await angularIOHomePage.searchResultsArea;
        await expect(searchResults.length).toEqual(2);
    })
})
