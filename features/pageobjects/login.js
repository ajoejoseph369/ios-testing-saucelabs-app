const { $ } = require('@wdio/globals')

const pageHeading = '//XCUIElementTypeStaticText[@name="Login"]';
const usernameField = '//XCUIElementTypeTextField[@name="Username input field"]';
const passwordField = '//XCUIElementTypeSecureTextField[@name="Password input field"]';
const loginBtn = '//XCUIElementTypeOther[@name="Login button"]';

class Login{
    async checkRedirection(){
        return(await $(pageHeading).isDisplayed());
    }

    async signIn(username,password){
        await $(usernameField).setValue(username);
        await $(passwordField).setValue(password);
        await $(loginBtn).click();
    }
}

module.exports = new Login();