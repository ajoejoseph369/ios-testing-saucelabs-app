const { $ } = require('@wdio/globals')

const pageHeading = '//XCUIElementTypeStaticText[@name="My Cart"]';
const viewCartBtn = '//XCUIElementTypeButton[@name="tab bar option cart"]';
const checkout = '//XCUIElementTypeOther[@name="Proceed To Checkout button"]';

class Cart{

    async checkRedirection(){
        return(await $(pageHeading).isDisplayed());
    }

    async viewCart(){
        await $(viewCartBtn).click();
    }

    async proceedToCheckout(){
        await $(checkout).click();
    }
}

module.exports = new Cart();