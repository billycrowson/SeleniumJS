const assert = require("assert");

describe("Testing herokuapp website", function(){
    it("Test 1", function() {
        const headerPass = require("../testcases/headerPass.test");
        headerPass.testExample();
    });
    it("Test 2", function() {
        const headerFail = require("../testcases/headerFail.test");
        headerFail.testExample();
    });
});