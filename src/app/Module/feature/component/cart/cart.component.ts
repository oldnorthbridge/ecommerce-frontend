import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/Model/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';
import { UserService } from 'src/app/State/User/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  cartItems:any
  totalPrice:any
  discount:any
  totalAmount:any
  constructor(private router: Router,private cartService :CartService, private store: Store<AppState>){
  }

  ngOnInit() {
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


  navigateToCheckout() {
    this.router.navigate(["checkout"])
  }
}
