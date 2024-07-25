const { $ } = require('@wdio/globals')

const pageHeading = '//XCUIElementTypeStaticText[@name="My Cart"]';
const viewCartBtn = '//XCUIElementTypeButton[@name="tab bar option cart"]';
const checkout = '//XCUIElementTypeOther[@name="Proceed To Checkout button"]';
const productRows = '//XCUIElementTypeOther[@name="product row"]';
const quantityCounter = '//XCUIElementTypeOther[@name="counter amount"]';
const totalQuantityCounter = '//XCUIElementTypeStaticText[@name="total number"]';
const priceCounter = '//XCUIElementTypeStaticText[@name="product price"]';
const totalPriceCounter = '//XCUIElementTypeStaticText[@name="total price"]';

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

    async checkTotalQuantityAndPrice(){
        let totalQuantity = 0;
        let totalPrice = 0;
        const pr = await $$(productRows);
        for(const row of pr){

            const quantityElement = await row.$(quantityCounter);
            const quantity = parseInt(await quantityElement.getText(),10);
            totalQuantity += quantity;

            const priceElement = await row.$(priceCounter);
            const priceText = await priceElement.getText();
            const price = parseFloat(priceText.replace(/[^\d.-]/g, ''));
            console.log("price= "+price);
            totalPrice +=price;

        }

        let condition_quantity = parseInt((await $(totalQuantityCounter).getText()).match(/\d+/)[0],10);
        console.log('total_qty= '+condition_quantity);
        let condition_price = parseFloat((await $(totalPriceCounter).getText()).match(/\d+(\.\d+)?/)[0]);
        console.log('total_price= '+condition_price);

        if(condition_quantity==totalQuantity)
            return true;

        if(condition_price==totalPrice)
            return true;
        
        else
            return false;
    }

}

module.exports = new Cart();