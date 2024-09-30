import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Module/feature/component/products/products.component';
import { HomeComponent } from './Module/feature/component/home/home.component';
import { CartComponent } from './Module/feature/component/cart/cart.component';
import { ProductDetailComponent } from './Module/feature/component/product-detail/product-detail.component';
import { CheckoutComponent } from './Module/feature/component/checkout/checkout.component';
import { PaymentComponent } from './Module/feature/component/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feature/component/payment-success/payment-success.component';
import { OrderComponent } from './Module/feature/component/order/order.component';
import { OrderDetailComponent } from './Module/feature/component/order-detail/order-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },

  {path:'cart',component:CartComponent},
  {path:'product-detail/:id', component:ProductDetailComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'checkout/payment/:id', component:PaymentComponent},
  {path: ':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  {path:'payment-success',component:PaymentSuccessComponent},
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:orderId', component: OrderDetailComponent },
  {path: 'admin',loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>m.AdminRoutingModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
