const { $ } = require('@wdio/globals')

const addToCartBtn = '//XCUIElementTypeOther[@name="Add To Cart button"]';
const pageHeading = '//XCUIElementTypeStaticText[@name="Sauce Labs Backpack"]';
const quantitySelector = '//XCUIElementTypeOther[@name="counter amount"]';
const quantityIncrementor = '//XCUIElementTypeOther[@name="counter plus button"]';
const quantityDecrementor = '//XCUIElementTypeOther[@name="counter minus button"]';
const black = '//XCUIElementTypeOther[@name="black circle"]';
const blue = '//XCUIElementTypeOther[@name="blue circle"]';
const grey = '//XCUIElementTypeOther[@name="gray circle"]';
const red = '//XCUIElementTypeOther[@name="red circle"]';

class Product_Description{

    async checkRedirection(){
        return(await $(pageHeading).isDisplayed());
    }
    
    async addtocart(){
        await $(addToCartBtn).click();
    }

    async selectQuatity(quantity){
        let qty = parseInt(await $(quantitySelector).getText(),10);
        let increment = await $(quantityIncrementor);
        let decrement = await $(quantityDecrementor);

        while(qty<quantity){
            await increment.click();
            qty = qty + 1;
        }

        while(qty>quantity){
            await decrement.click();
            qty = qty - 1;
        }
    }

    async selectColour(colour){
        if(colour=="black")
            await $(black).click();
        else if(colour=="blue")
            await $(blue).click();
        else if(colour=="grey")
            await $(grey).click();
        else
            await $(red).click();
    }
}

module.exports = new Product_Description();