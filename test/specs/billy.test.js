const assert = require("assert");
const herokuapp = require("../../pageobjects/herokuapp");
 
describe("Billy's Frist Test", function() {
    it("Lambdatest Demo TestCase", function() {
        browser.url("https://the-internet.herokuapp.com/");
        //$("//h1").getText();
        headerText = herokuapp.header.getText();
        //$("//a[text()='A/B Testing']").click();
        herokuapp.abTestingLink.click();
        browser.pause(1000);
        console.log(headerText+" Test log");
        
        
    });
});