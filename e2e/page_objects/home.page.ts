import { $, by, element } from "protractor";
export class HomePage {

    public addProductButton = $("a[href='/product-add']");

    public findProductInTable = (product: myLib.Product) => {
        return element(by.cssContainingText("td.mat-cell", product.name));
    }

    public findProductsInTable = (product: myLib.Product) => {
        return element.all(by.cssContainingText(".mat-cell", product.name))
    };
}