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
const angularIOPageObject_1 = require("../pageObjects/angularIOPageObject");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let angularIOHomePage = new angularIOPageObject_1.angularIO();
var expect = chai_1.default.expect;
cucumber_1.When('I click on {string} link', (link) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    switch (link) {
        case "angular.io": {
            yield angularIOHomePage.angularLink.click();
            break;
        }
    }
}));
cucumber_1.Then('I expect to see {string} page', (pageName) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    let pageTitle = yield protractor_1.browser.getTitle();
    yield expect(pageTitle).to.equal(pageName);
}));
cucumber_1.When('I enter {string} on the Search textbox', (searchCriteria) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield angularIOHomePage.searchTxtBox.sendKeys(searchCriteria);
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('I expect to see matching results', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    let searchResults = yield angularIOHomePage.searchResultsArea;
    yield expect(searchResults.length).to.equal(2);
}));
//# sourceMappingURL=angularIO.js.map