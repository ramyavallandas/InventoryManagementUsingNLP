import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    // You can fetch the products here from your service when you set it up
  }
}
