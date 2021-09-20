import Product from "./product.js";
import Order from "./order.js";
import bArray from './array.js';

class App {
    constructor() {
        this._btnAdd = document.querySelector('#btnAdd');
        this._btnDelete = document.querySelector('#btnDelete');
        this._btnSearch = document.querySelector('#btnSearch');
        this._btnList = document.querySelector('#btnList');
        this._btnListI = document.querySelector('#btnListI');
        this._btnInsert = document.querySelector('#btnInsert');
        this._table = document.querySelector('#table');

        this._btnAdd.addEventListener('click', this.onBtnAdd);
        this._btnDelete.addEventListener('click', this.onBtnDelete);
        this._btnSearch.addEventListener('click', this.onBtnSearch);
        this._btnList.addEventListener('click', this.onBtnList);
        this._btnListI.addEventListener('click', this.onBtnListI);
        this._btnInsert.addEventListener('click', this.onBtnInsert);
        this._products = new Order()
    }
    
    onBtnAdd = () => {
        let product = Product.readFormAdd();
    
        if(product === false) {
            Swal.fire('Error', 'Todos los campos son requeridos', 'error');
            return;
        }

        let result = this._products.add(product);

        if(result === false) {
            Swal.fire('Error', 'Este producto ya ha sido registrado', 'error');
            return;
        }
        
        this._addProduct(product);
        Swal.fire('Correcto', 'Se ha añadido el producto exitosamente', 'success');
        console.log(this._products);
        }

        _addProduct(product) {
            let row = this._table.insertRow(1);

            let colCode = row.insertCell(0);
            let colName = row.insertCell(1);
            let colQuantity = row.insertCell(2);
            let colCost = row.insertCell(3);
            let colTotal = row.insertCell(4);
            
            colCode.innerHTML = product.getCode();
            colName.innerHTML = product.getName();
            colQuantity.innerHTML = product.getQuantity();
            colCost.innerHTML = `$${product.getCost()}`
            colTotal.innerHTML = `$${product.getTotal()}`;

            document.querySelector('#tProducts').innerHTML = this._products.getTotalQuantity();
            document.querySelector('#tOrder').innerHTML = `$${this._products.getCompleteTotal()}`;
        }
    }

new App();

let table = document.querySelector('#table');

let row = table.insertRow(1);