import { browser } from "protractor";
import { Given, When } from "cucumber";

Given('I am on {string} page', async (url) => {
	await browser.get(url);
});

