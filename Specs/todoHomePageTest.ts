import { browser, element, by } from "protractor"
import { todoHomePage } from "../pageObjects/todoHomePageObject";

describe("Homepage Todo List", function () {

	let toDoHomePage = new todoHomePage();

	it(": Should Open the browser and go to Homepage URL", async () => {
		await browser.get('https://angularjs.org');
		await expect(browser.getTitle()).toEqual(
			'AngularJS — Superheroic JavaScript MVW Framework');
	});

	it(": Should Add a Todo", async () => {
		await toDoHomePage.addNewTodoTxtBox.sendKeys(
			'write first protractor test');
		await toDoHomePage.addBtn.click();
		let todoListElements = await toDoHomePage.todoCheckBoxsList;
		await expect(todoListElements[2].getText()).toEqual(
			'write first protractor test');
		await expect(todoListElements.length).toEqual(3);

		//expect(true).toBe(true);
	});

	it(": Should Mark the newly added Todo as Completed", async () => {
		await toDoHomePage.lastTodoCheckBox.click();
		let completedTodoElements = await toDoHomePage.todoCompletedCheckBoxsList;
		await expect(completedTodoElements.length).toEqual(2);
	});

	it(": Should Close the browser", async () => {
		await browser.close();
		//expect(true).toBe(true);
	});
});