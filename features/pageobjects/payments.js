const { $ } = require('@wdio/globals')

const pageHeading = '//XCUIElementTypeStaticText[@name="Enter a payment method"]';
const name = '//XCUIElementTypeTextField[@name="Full Name* input field"]';
const cardNo = '//XCUIElementTypeTextField[@name="Card Number* input field"]';
const expiry = '//XCUIElementTypeTextField[@name="Expiration Date* input field"]';
const CVV = '//XCUIElementTypeTextField[@name="Security Code* input field"]';
const reviewOrderBtn = '//XCUIElementTypeOther[@name="Review Order button"]';
const placeOrderBtn = '//XCUIElementTypeOther[@name="Place Order button"]';
const confirmMsg = '//XCUIElementTypeStaticText[@name="Checkout Complete"]';

class Payments{
    async checkRedirection(){
        return(await $(pageHeading).isDisplayed());
    }

    async fillCardDetails(){
        await $(name).setValue("Ajoe Joseph");
        await $(cardNo).setValue("3258126575687893");
        await $(expiry).setValue('03/25');
        await $(CVV).setValue(299);
        await $(pageHeading).click();
    }

    async reviewOrder(){
        //while(!(await $(placeOrderBtn).isDisplayed()))
        await $(reviewOrderBtn).waitForDisplayed({timeout:6000});
        await $(reviewOrderBtn).click();
        await $(reviewOrderBtn).click();
    }

    async placeOrder(){
        await $(placeOrderBtn).waitForDisplayed({timeout:6000});
        await $(placeOrderBtn).click();
    }

    async confirmOrder(){
        return(await $(confirmMsg).isDisplayed());
    }
}

module.exports = new Payments();