//Type definitions for ProductList Test Automation Framework

declare namespace myLib {

    //Enforces the format of our test data
    //Our global 'Product' type/interface
    // A Template for 'product' test data
    interface Product {
        // Must have a name
        name: string;
        // Must have a description
        description: string;
        // Must have a price
        price: string;
    }
}

// Example ont that we're not using for our framework
interface CustomerDetails {
    name: string;
    address: string;
    // ? means that the vehicle details are optional
    vehicleDetails?: {
        make: string;
        model: string;
        year: number;
    }
}