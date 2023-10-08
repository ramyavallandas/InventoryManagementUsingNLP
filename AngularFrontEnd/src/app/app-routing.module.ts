import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  // Add more routes as needed
  //path: 'categories', component: CategoryComponent;
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

