const { $ } = require('@wdio/globals')

const pageHeading = '//XCUIElementTypeStaticText[@name="Checkout"]';
const name = '//XCUIElementTypeTextField[@name="Full Name* input field"]';
const address = '//XCUIElementTypeTextField[@name="Address Line 1* input field"]';
const city = '//XCUIElementTypeTextField[@name="City* input field"]';
const state = '//XCUIElementTypeTextField[@name="State/Region input field"]';
const zipcode = '//XCUIElementTypeTextField[@name="Zip Code* input field"]';
const country = '//XCUIElementTypeTextField[@name="Country* input field"]';
const paymentBtn = '//XCUIElementTypeOther[@name="To Payment button"]';

class Checkout{

    async checkRedirection(){
        return(await $(pageHeading).isDisplayed());
    }

    async fillDetails(){
        await $(name).setValue('PersonABCD');
        await $(address).setValue('Sample Address');
        await $(city).setValue('Bangalore');
        await $(state).setValue('Karnataka');
        await $(zipcode).setValue('5858290');
        await $(country).setValue('India');
        // await browser.hideKeyboard();
        // await browser.execute('mobile: hideKeyboard');
        // await browser.execute('mobile: pressButton', { value: 'return' });
        await $(pageHeading).click();
    }

    async goToPayment(){
        await $(paymentBtn).click();
    }
}

module.exports = new Checkout();