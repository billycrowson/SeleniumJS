const assert = require("assert");
const herokuapp = require("../../pageobjects/herokuapp.page");

class headerFail {

    //This calls all of the functions that make up the test run
    testExample() {
        this.launchBrowser();
        this.verifyHeader();
        this.clickAbTestingLink();
    }

    launchBrowser() {

        //This uses the base URL defined in wdio.conf.js
        browser.url('/');
        //This maximizes the browser window
        browser.maximizeWindow();
    }

    verifyHeader() {
        //This will verify the Header text is "Welcome to he-internet" it will fail
        expect (herokuapp.header).toHaveText('Welcome to he-internet');

    }

    clickAbTestingLink() {
        //This will click the A/B Link
        herokuapp.abTestingLink.click();
        //This will pause the test for 1 second to visually see link was clicked
        browser.pause(1000);
    }

}



module.exports = new headerFail();