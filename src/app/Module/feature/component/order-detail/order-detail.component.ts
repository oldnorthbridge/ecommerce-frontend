import { Component } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  orders= [1,1,1]

  steps=[
    {id:0,title:"PLACED", isCompleted:true},
    {id:1,title:"CONFIRMED", isCompleted:true},
    {id:2,title:"SHIPPED", isCompleted:true},
    {id:3,title:"DELIVER", isCompleted:false}
  ]
}
