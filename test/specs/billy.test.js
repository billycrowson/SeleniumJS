const assert = require("assert");
const herokuapp = require("../../pageobjects/herokuapp.page");

describe("Billy's Frist Test", function(){
    it("Lambdatest Demo TestCase", function() {
        launchBrowser();
        verifyHeader();
        clickAbTestingLink();
    });
});

function launchBrowser(){

    browser.url("https://the-internet.herokuapp.com/");
}

function verifyHeader(){

    headerText = herokuapp.header.getText();
}

function clickAbTestingLink(){

    herokuapp.abTestingLink.click();
    browser.pause(1000);
}