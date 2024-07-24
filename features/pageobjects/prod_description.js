const { $ } = require('@wdio/globals')

const addToCartBtn = '//XCUIElementTypeOther[@name="Add To Cart button"]';
const pageHeading = '//XCUIElementTypeStaticText[@name="Sauce Labs Backpack"]';

class Product_Description{

    async checkRedirection(){
        return(await $(pageHeading).isDisplayed());
    }
    
    async addtocart(){
        await $(addToCartBtn).click();
    }
}

module.exports = new Product_Description();