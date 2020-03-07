import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before({ tags: "@foo" }, function () {
    // This hook will be executed before scenarios tagged with @foo
});

Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});

After(async function (scenario) {

    if (scenario.result.status == Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});