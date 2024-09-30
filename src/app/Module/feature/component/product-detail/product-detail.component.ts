import { Component } from '@angular/core';
import { filter, Observable, switchMap, take } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/Model/AppState';
import { ProductService } from 'src/app/State/Product/product.service';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { CartService } from 'src/app/State/Cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  selectedSize: any
  reviews = [1, 1, 1]
  relatedProducts: any
  product: any;
  productId:any

  constructor(private router: Router, private productService: ProductService, private activedRoute: ActivatedRoute, private store: Store<AppState>,private cartService : CartService) {
  }

  handleAddToCart() {
    console.log("selected size" , this.selectedSize)
    const data = {size:this.selectedSize,productId:this.productId}
    this.cartService.addItemToCart(data)
    this.cartService.getCart()
    this.router.navigate(['cart'])
  }
  ngOnInit() {
    this.product = {}
    this.relatedProducts = lehngacholiPage2
    let id = this.activedRoute.snapshot.paramMap.get('id');
    // 这一行是向后端发送异步请求(发送请求后,按理来说是等待数据返回到前端,再从状态管理库中获取数据,但是这里在数据返回到前端之前就去状态管理库中获取数据,我之前的办法是用ngIf), 现在就是需要等this.productService.findProductById(id)执行完,再执行下面的代码
    this.productService.findProductById(id)
    this.productId=id


    // 这一行是从状态管理库中获取数据,
    this.store.pipe(select((store) => store.product)).subscribe(
      (product) => {
        this.product = product?.selectedProduct
      }
    )
  }
}
