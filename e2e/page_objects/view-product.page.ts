import { $, by, element } from "protractor";
export class ViewProductPage {
    
    public deleteButton = $(".mat-flat-button.mat-warn");

    public productName = (product: myLib.Product) => {
        return element(by.cssContainingText("h2", product.name));

    }
}
