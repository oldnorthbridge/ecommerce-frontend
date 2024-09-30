import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/Model/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';
import { OrderService } from 'src/app/State/Order/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
 
  order:any

  cartItems:any
  totalPrice:any
  discount:any
  totalAmount:any

  constructor( private route: ActivatedRoute,private orderService:OrderService, private store:Store<AppState>, private cartService:CartService) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getOrderById(id);
      // this.store.dispatch(getOrderByIdRequest({ orderId: id }));
    }
    this.store.pipe(select(store=>store.order)).subscribe((order)=>{
      
      this.order = order.order
    })
    this.cartService.getCart();
    this.store.pipe(select((store) => store.cart)).subscribe((cart) => {
      
      this.cartItems =  cart.cartItems
      if(this.cartItems) {
        
        let totalPrice = 0
        let discount = 0
        let totalAmount = 0
       
        for(let item of this.cartItems) {
          totalPrice = totalPrice + item.price
          discount = discount + (item.price-item.discountedPrice)
          totalAmount = totalAmount + item.discountedPrice
          this.totalPrice = totalPrice
          this.discount = discount
          this.totalAmount = totalAmount
          console.log(item)
          
        }
      }
    });
   
  }

  redirectToPaymentPage() {
    
  }
}
