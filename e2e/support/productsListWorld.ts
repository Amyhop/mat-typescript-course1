import { World } from "cucumber";

declare module "cucumber" {
    interface World {

        // A place to store our test data while the test runs
        // So every step has access to our test data

        product: myLib.Product;
    }
}