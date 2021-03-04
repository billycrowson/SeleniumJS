const elementUtil = require('../utils/elementUtils');

class herokuapp {

    //page locators:
    get header() {return $("//h1")}
    get abTestingLink() {return $("//a[text()='A/B Testing']")}

    //page actions
    getPageTitle(){
        return elementUtil.doGetPageTitle()
    }
}

module.exports = new herokuapp();