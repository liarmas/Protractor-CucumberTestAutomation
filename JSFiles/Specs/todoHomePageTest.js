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
const todoHomePageObject_1 = require("../pageObjects/todoHomePageObject");
describe("Homepage Todo List", function () {
    let toDoHomePage = new todoHomePageObject_1.todoHomePage();
    it(": Should Open the browser and go to Homepage URL", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://angularjs.org');
        yield expect(protractor_1.browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    }));
    it(": Should Add a Todo", () => __awaiter(this, void 0, void 0, function* () {
        yield toDoHomePage.addNewTodoTxtBox.sendKeys('write first protractor test');
        yield toDoHomePage.addBtn.click();
        let todoListElements = yield toDoHomePage.todoCheckBoxsList;
        yield expect(todoListElements[2].getText()).toEqual('write first protractor test');
        yield expect(todoListElements.length).toEqual(3);
        //expect(true).toBe(true);
    }));
    it(": Should Mark the newly added Todo as Completed", () => __awaiter(this, void 0, void 0, function* () {
        yield toDoHomePage.lastTodoCheckBox.click();
        let completedTodoElements = yield toDoHomePage.todoCompletedCheckBoxsList;
        yield expect(completedTodoElements.length).toEqual(2);
    }));
    it(": Should Close the browser", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.close();
        //expect(true).toBe(true);
    }));
});
//# sourceMappingURL=todoHomePageTest.js.map