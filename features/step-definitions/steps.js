const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const Catalog = require('../pageobjects/catalog.js');
const Login = require('../pageobjects/login.js');
const Product = require('../pageobjects/prod_description.js');
const Cart = require('../pageobjects/cart.js');
const Checkout = require('../pageobjects/checkout.js');

Given(/^user is on the homepage$/, async () => {
	await Catalog.checkRedirection();
});

When(/^user clicks on menu$/, async () => {
	await Catalog.goToMenu();
});

Then(/^user gets a menu$/, async () => {
	await Catalog.goToLoginPage();
});

Given(/^user is on the login page$/, async () => {
	await Login.checkRedirection();
});

When(/^logs in using (.*) and (.*)$/, async (username,password) => {
	await Login.signIn(username,password);
});

Then(/^user is redirected to Catalog page$/, async () => {
	await Catalog.checkRedirection();
});

Given(/^user is on the Catalog page$/, async () => {
	await Catalog.checkRedirection();
});

When(/^user clicks on the first product$/, async () => {
	await Catalog.selectProduct();
});

Then(/^user is redirected to the product page$/, async () => {
    await Product.checkRedirection();
});

Given(/^user is on the product page$/, async () => {
	await Product.checkRedirection();
});

When(/^user clicks on add to cart button$/, async () => {
	await Product.addtocart();
});

Then(/^product is added to cart$/, async () => {
	return true;
});

Given(/^user is on the cart page$/, async () => {
    await Cart.viewCart();
	await Cart.checkRedirection();
});

When(/^user clicks on proceed to checkout button$/, async () => {
	await Cart.proceedToCheckout();
});

Then(/^user is redirected to the checkout page$/, async () => {
	await Checkout.checkRedirection();
});

Given(/^user is on the checkout page$/, async () => {
	await Checkout.checkRedirection();
});

When(/^user enters all details$/, async () => {
	await Checkout.fillDetails();
});

Then(/^user clicks on to payment button$/, async () => {
	await Checkout.goToPayment();
});

Then(/^user is redirected to payment completion page$/,async () => {
	return true;
});
