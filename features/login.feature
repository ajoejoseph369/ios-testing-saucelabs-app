Feature: Test the functionality of the ecommerce app

  Scenario: User goes to login page
    Given user is on the homepage
    When user clicks on menu
    Then user gets a menu

  Scenario: User logs in to the application
    Given user is on the login page
    When logs in using <username> and <password>
    Then user is redirected to Catalog page

    Examples:
      | username        | password |
      | bob@example.com | 10203040 |

  Scenario: User selects an item
    Given user is on the Catalog page
    When user clicks on the first product
    Then user is redirected to the product page

  Scenario: User adds item to the cart
    Given user is on the product page
    When user clicks on add to cart button
    Then product is added to cart

  Scenario: User views cart
    Given user is on the cart page
    When user clicks on proceed to checkout button
    Then user is redirected to the checkout page

  Scenario: User proceeds to payment
    Given user is on the checkout page
    When user enters all details
    Then user clicks on to payment button
    Then user is redirected to payment completion page
