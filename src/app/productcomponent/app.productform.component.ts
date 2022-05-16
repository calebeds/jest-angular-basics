import { Component, OnInit } from '@angular/core';
import {Product,Manufacturers, Categories} from './../app.product.model';
import {Logic} from './../logic';

@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html'
})
// OnInit: Angular Component's lifecycle interface
export class ProductFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  categories = Categories;
  manufacturers = Manufacturers;
  private logic: Logic;
  columnHeaders: Array<any>;
  tax: number;

  constructor() {
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array();
    this.logic = new Logic();
    this.columnHeaders = new Array();
    this.tax = 0;
  }
  
  ngOnInit(): void {
    this.products  =  this.logic.getProducts();
    console.log(JSON.stringify(this.products));
    // read properties from product object
    for (const p of Object.keys(this.product)) {
       this.columnHeaders.push(p);
    }
    console.log(JSON.stringify(this.columnHeaders));
  }
  clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
  }
  save(): void {
    this.tax = this.product.basePrice * 0.2;
    this.products = this.logic.addProduct(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(event: any): void {
     this.product = Object.assign({}, event);
  }
}