import { $, by, element } from "protractor";
export class AddProductPage {

    public productNameField = $("#mat-input-0");
    public productDescriptionField = $("#mat-input-1");
    public productPriceField = $("#mat-input-2");
    public submitButtonField = $("[type=submit]");
    
}