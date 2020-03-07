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
const angularIOPageObject_1 = require("../pageObjects/angularIOPageObject");
describe("AngularIO Home Page", function () {
    let angularIOHomePage = new angularIOPageObject_1.angularIO();
    it(": Should Open the browser and go to AngularIO Homepage URL from AngularJS", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://angularjs.org');
        yield expect(protractor_1.browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
        yield angularIOHomePage.angularLink.click();
        yield expect(protractor_1.browser.getTitle()).toEqual('Angular');
    }));
    it(": Should validate Search funtionality", () => __awaiter(this, void 0, void 0, function* () {
        yield angularIOHomePage.searchTxtBox.sendKeys("Hello");
        yield protractor_1.browser.sleep(5000);
        let searchResults = yield angularIOHomePage.searchResultsArea;
        yield expect(searchResults.length).toEqual(2);
    }));
});
//# sourceMappingURL=angularIOTest.js.map