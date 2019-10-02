// import chai and the `expect` command.

import { Given, Then, When } from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

const homepage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given('a product doesn\'t exist', async function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    
    const arrayOfProducts = dataTable.hashes();
    this.product = arrayOfProducts[0];

    while (await homepage.findProductsInTable(this.product).count() > 0 ) {
    homepage.findProductsInTable(this.product).first().click();
    viewProductPage.deleteButton.click();
}
    return expect(homepage.findProductInTable(this.product).isPresent()).to.eventually.be.false;
  });

When('I add the product', function () {
    // Write code here that turns the phrase above into concrete actions
    homepage.addProductButton.click();

    addProductPage.productNameField.sendKeys(this.product.name);
    addProductPage.productDescriptionField.sendKeys(this.product.description);
    addProductPage.productPriceField.sendKeys(this.product.price);

    return addProductPage.submitButtonField.click();
  });

Then('the product is created', function () {
    // Write code here that turns the phrase above into concrete actions
    return expect(viewProductPage.productName(this.product).isPresent()).to.eventually.be.true;
    return 'pending';
  });