import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class todoHomePage {

    addNewTodoTxtBox: ElementFinder;
    addBtn: ElementFinder;
    todoCheckBoxsList: ElementArrayFinder;
    lastTodoCheckBox: ElementFinder;
    todoCompletedCheckBoxsList: ElementArrayFinder;

    constructor() {
        this.addNewTodoTxtBox = element(by.model('todoList.todoText'));
        this.addBtn = element(by.css('input[value="add"]'));
        this.todoCheckBoxsList = element.all(by
            .repeater('todo in todoList.todos'));
        this.lastTodoCheckBox = ((element.all(by
            .repeater('todo in todoList.todos'))).last)().element(by.css('input'));
        this.todoCompletedCheckBoxsList = element.all(by.css('.done-true'));

    }   

}