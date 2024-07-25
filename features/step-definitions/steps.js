const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const Catalog = require('../pageobjects/catalog.js');
const Login = require('../pageobjects/login.js');
const Product = require('../pageobjects/prod_description.js');
const Cart = require('../pageobjects/cart.js');
const Checkout = require('../pageobjects/checkout.js');
const Payment = require('../pageobjects/payments.js');

//catalog

Given(/^user is on the homepage$/, async () => {
	await Catalog.checkRedirection();
});

When(/^user clicks on menu$/, async () => {
	await Catalog.goToMenu();
});

Then(/^user gets a menu$/, async () => {
	await Catalog.goToLoginPage();
});


//login

Given(/^user is on the login page$/, async () => {
	await Login.checkRedirection();
});

When(/^logs in using (.*) and (.*)$/, async (username,password) => {
	await Login.signIn(username,password);
});

Then(/^user is redirected to Catalog page$/, async () => {
	await Catalog.checkRedirection();
});


//catalog

Given(/^user is on the Catalog page$/, async () => {
	await Catalog.checkRedirection();
});

When(/^user clicks on the first product$/, async () => {
	await Catalog.selectProduct();
});

Then(/^user is redirected to the product page$/, async () => {
    await Product.checkRedirection();
});


//product

Given(/^user is on the product page$/, async () => {
	await Product.checkRedirection();
});

When(/^user selects (.*) colour$/, async (colour) => {
	await Product.selectColour(colour)
});

When(/^user selects (.*) number$/, async (quantity) => {
	await Product.selectQuatity(quantity);
});

When(/^user clicks on add to cart button$/, async () => {
	await Product.addtocart();
});

Then(/^product is added to cart$/, async () => {
	return true;
});


//cart

Given(/^user is on the cart page$/, async () => {
    await Cart.viewCart();
	await Cart.checkRedirection();
});

When(/^user clicks on proceed to checkout button$/, async () => {
	await Cart.checkTotalQuantityAndPrice();
	await Cart.proceedToCheckout();
});

Then(/^user is redirected to the checkout page$/, async () => {
	await Checkout.checkRedirection();
});


//checkout

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
	await Payment.checkRedirection();
});


//payment

Given(/^user is on the payments page$/, async () => {
	await Payment.checkRedirection();
});

When(/^user fills in card details$/, async () => {
	await Payment.fillCardDetails();
});

Then(/^user clicks review order$/, async () => {
	await Payment.reviewOrder();
});

Then(/^user is redirected to order completion page$/, async () => {
	await Payment.placeOrder();
	await Payment.confirmOrder();
});
