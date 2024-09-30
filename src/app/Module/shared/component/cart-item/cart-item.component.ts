import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/State/Cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input()
  showButton:any;

  @Input()
  item:any


  constructor(private cartService: CartService) {

  }
  updateCartItem(num:Number) {
    this.cartService.updateCartItem(
      {
        cartItemId: this.item.id,
        data: {quantity:num+this.item.quantity}
      }
    )
  }
  removeCartItem() {
    this.cartService.removeCartItem(this.item.id)
    
  }
  ngOnInit(){
    console.log(this.showButton)
  }
}
