import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private router:Router) {

  }
  orders = [[1,1]]
  orderFilter = [
    {value: "on_the_way", label: "On the way"},
    {value: "delivered", label: "Delivered"},
    {value: "cancelled", label: "Cancelled"},
    {value: "returned", label: "Returned"}
]



navigateToOrderDetails(id:Number) {
  this.router.navigate([`order/${id}`])
}
}
