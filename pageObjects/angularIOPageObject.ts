import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class angularIO{

    angularLink:ElementFinder;
    searchTxtBox: ElementFinder;
    searchResultsArea: ElementArrayFinder;

    constructor(){
        this.angularLink = element(by.linkText("angular.io"));
        this.searchTxtBox = element(by.css("[placeholder='Search']"));
        this.searchResultsArea = element.all(by.css("div[class='search-area ng-star-inserted']"));

    }

}