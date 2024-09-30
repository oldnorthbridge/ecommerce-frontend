import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './component/feature.component';
import { HomeComponent } from './component/home/home.component';
import { MainCarouselComponent } from 'src/app/Module/feature/component/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './component/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './component/home/product-slider/home-product-card/home-product-card.component';
import { ProductsComponent } from './component/products/products.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from "../shared/shared.module";
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';
import { OrderComponent } from './component/order/order.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductReviewCardComponent } from './component/product-detail/product-review-card/product-review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddressFormComponent } from './component/checkout/address-form/address-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrderCardComponent } from './component/order-card/order-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailComponent,
    ProductReviewCardComponent,
    AddressFormComponent,
    OrderCardComponent,
   
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule,
    FormsModule,
    MatProgressBarModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule
],
  exports:[
    FeatureComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    CheckoutComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailComponent,
   
  ]
})
export class FeatureModule { }
