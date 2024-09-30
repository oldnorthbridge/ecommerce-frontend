import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { OrdersTableComponent } from './component/orders-table/orders-table.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CreateProductComponent } from './component/create-product/create-product.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminProductComponent,
    OrdersTableComponent,
    CustomerComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    // AdminComponent
  ]
})
export class AdminModule { }
