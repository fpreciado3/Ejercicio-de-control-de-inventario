import bArray from './array.js';

export default class Order {
    constructor() {
        this._products = new Array();
    }

    add(product) {
        let pos = this._findProduct(product);

        if(pos >= 0) {
            return false;
        }

        this._products.push(product);

        return true;
    }

    delete(productD) {
        let pos = this._findProduct(productD);

        if(pos === -1) {
            return null;
        }

        let deleted = this._products.getByIndex(pos);
        this._products = this._products.filter(product => product.getCode() !== productD.getCode());
        return deleted;
    }

    _findProduct(product) {
        return this._products.findIndex(p => p.getCode() === product.getCode());
    }

    getTotalQuantity() {
        let qty = 0;

        for(let i = 0; i < this._products.length; i++) {
            qty += this._products[i].getQuantity();
        }
        
        return qty;
    }

    getCompleteTotal() {
        let total = 0;

        for(let i = 0; i < this._products.length; i++) {
            total += this._products[i].getTotal();
        }

        return total;
    }
}