export default class Product {
    constructor(code, name, quantity, cost) {
        this._code = code;
        this._name = name;
        this._quantity = quantity;
        this._cost = cost;
    }

    //reading methods

    getCode() {
        return this._code;
    }

    getName() {
        return this._name.toUpperCase();
    }

    getQuantity() {
        return this._quantity;
    }

    getCost() {
        return this._cost;
    }

    //other methods/functions

    getTotal() {
        return this._quantity * this._cost;
    }

    static readFormAdd() {
        let inpCode = document.querySelector('#code');
        let inpName = document.querySelector('#name');
        let inpQuantity = document.querySelector('#quantity');
        let inpCost = document.querySelector('#cost');


        let code = inpCode.value;
        let name = inpName.value;
        let quantity = Number(inpQuantity.value);
        let cost = inpCost.value;

        if(code && name && cost && quantity) {
            let product = new Product(code, name, quantity, cost);
            
            inpCode.value = "";
            inpName.value = "";
            inpQuantity.value = "";
            inpCost.value = "";
            
            return product;
        }

        return false;
    }
}