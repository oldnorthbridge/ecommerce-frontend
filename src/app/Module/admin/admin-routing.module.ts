import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CreateProductComponent } from './component/create-product/create-product.component';

const routes: Routes = [
  {path: '',component:AdminComponent,children:[
    {path:'',component:DashboardComponent},
    {path:"orders",component:OrdersTableComponent},
    {path:"products",component:AdminProductComponent},
    {path:"customers",component:CustomerComponent},
    {path:"create-product", component:CreateProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
