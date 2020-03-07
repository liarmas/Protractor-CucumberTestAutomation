"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class angularIO {
    constructor() {
        this.angularLink = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.searchTxtBox = protractor_1.element(protractor_1.by.css("[placeholder='Search']"));
        this.searchResultsArea = protractor_1.element.all(protractor_1.by.css("div[class='search-area ng-star-inserted']"));
    }
}
exports.angularIO = angularIO;
//# sourceMappingURL=angularIOPage.js.map