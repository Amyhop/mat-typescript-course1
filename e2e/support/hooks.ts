import {browser} from "protractor";
import {After, Before, Status } from "cucumber";

Before({timeout: 100 * 1000}, async function() {

    // Opens the website to the default URL in the 'protractor.config.ts' file
    await browser.get("");

});

// This will run after every scenario
After({timeout: 100 * 1000}, async function(scenario) {

    // check to see if the scenario failed
    if (scenario.result.status === Status.FAILED) {
        // screenshot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        // attach the screenshot to the report
        this.attach(screenShot, "image/png");
    }
});

