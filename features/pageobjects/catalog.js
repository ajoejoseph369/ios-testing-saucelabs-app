const { $ } = require('@wdio/globals')

const pageHeading = '//XCUIElementTypeStaticText[@name="Products"]';
const menu = '//XCUIElementTypeButton[@name="tab bar option menu"]';
const loginOption = '//XCUIElementTypeOther[@name="menu item log in"]';
const productBag = '//XCUIElementTypeOther[@name="Sauce Labs Backpack"]';


class Catalog{
    async checkRedirection(){
        return(await $(pageHeading).isDisplayed());
    }
    async goToMenu(){
        await $(menu).waitForDisplayed();
        await $(menu).click();
    }

    async goToLoginPage(){
        await $(loginOption).waitForDisplayed();
        await $(loginOption).click();
    }

    async selectProduct(){
        await $(productBag).click();
    }


}

module.exports = new Catalog();