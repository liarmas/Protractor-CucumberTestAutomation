"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class todoHomePage {
    constructor() {
        this.addNewTodoTxtBox = protractor_1.element(protractor_1.by.model('todoList.todoText'));
        this.addBtn = protractor_1.element(protractor_1.by.css('input[value="add"]'));
        this.todoCheckBoxsList = protractor_1.element.all(protractor_1.by
            .repeater('todo in todoList.todos'));
        this.lastTodoCheckBox = ((protractor_1.element.all(protractor_1.by
            .repeater('todo in todoList.todos'))).last)().element(protractor_1.by.css('input'));
        this.todoCompletedCheckBoxsList = protractor_1.element.all(protractor_1.by.css('.done-true'));
    }
}
exports.todoHomePage = todoHomePage;
//# sourceMappingURL=todoHomePageObject.js.map