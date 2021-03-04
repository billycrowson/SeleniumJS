const assert = require("assert");
const herokuapp = require("../../pageobjects/herokuapp.page");

describe("Billy's Frist Test", function(){
    it("Test 1", function() {
        launchBrowser();
        verifyHeader();
        clickAbTestingLink();
    });
});

function launchBrowser(){

    //This uses the base URL defined in wdio.conf.js
    browser.url('/');
    browser.maximizeWindow();
}

function verifyHeader(){

    headerText = herokuapp.header.getText();
}

function clickAbTestingLink(){

    herokuapp.abTestingLink.click();
    browser.pause(1000);
}