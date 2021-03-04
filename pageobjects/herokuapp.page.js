const elementUtil = require('../utils/elementUtils');
const Page = require('./page');

class herokuapp extends Page {

    //page locators:
    get header() {return $("//h1")}
    get abTestingLink() {return $("//a[text()='A/B Testing']")}

    //page actions
    getPageTitle(){
        return elementUtil.doGetPageTitle()
    }
}

module.exports = new herokuapp();