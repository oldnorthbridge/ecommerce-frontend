import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { BASE_API_URL } from "src/app/config/api";
import { createProductFailure, createProductSuccess, deleteProductFailure, deleteProductSuccess, findProductByIdFailure, findProductByIdSuccess, findProductsByCategoryFailure, findProductsByCategorySuccess, recentllyAddedProductsFailure, recentllyAddedProductsSuccess } from "./product.action";
import { catchError, map, of } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class ProductService {

    API_BASE_URL = BASE_API_URL;
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('jwt'); 
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
  
    constructor(
      private store: Store,
      private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute
    ) {}
  
    findProductsByCategory(reqData: any) {
      const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize,
      } = reqData;
  
      let params = new HttpParams()
        .set('color', colors)
        .set('size', sizes)
        .set('minPrice', minPrice)
        .set('maxPrice', maxPrice)
        .set('minDiscount', minDiscount)
        .set('category', category)
        .set('stock', stock)
        .set('sort', sort)
        .set('pageNumber', pageNumber)
        .set('pageSize', pageSize);
  
      const headers = this.getHeaders();
  
      return this.http
        .get(`${this.API_BASE_URL}/api/products`, { headers, params })
        .pipe(
          map((data: any) => {
            console.log("products data",data)
            return findProductsByCategorySuccess({ payload: data })}),
          catchError((error: any) => {
            return of(
              findProductsByCategoryFailure(
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
              )
            );
          })
        )
        .subscribe((action) => this.store.dispatch(action));
    }
  
    findProductById(productId: any) {
      const headers = this.getHeaders();
      return new Promise((resolve) => {
        this.http
        //这里的get 是异步方法,
          .get(`${this.API_BASE_URL}/api/products/id/${productId}`, { headers })
          .pipe(
            // 这里的意思是从后端获取数据成功,把它存到状态管理库中,findProductByIdSuccess()调用后
            map((data: any) => {
              console.log("productById 获取数据成功")
              return findProductByIdSuccess({ payload: data })
            }),
            catchError((error: any) => {
              return of(
                findProductByIdFailure(
                  error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                )
              );
            })
          )//subscribe 里面的回调函数执行
          .subscribe((action) => {
           return this.store.dispatch(action)
          });
      })
    }

  
  
    createProduct(product: any) {
      const headers = this.getHeaders();
      return this.http
        .post(`${this.API_BASE_URL}/api/admin/products/`, product, {
          headers,
        })
        .pipe(
          map((data: any) => {
            console.log(' created product ', data);
            return createProductSuccess(data);
          }),
          catchError((error: any) => {
            console.log(" error creating product",error)
            return of(
              createProductFailure(
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
              )
            );
          })
        )
        .subscribe((action) => this.store.dispatch(action));
    }
  
    deleteProduct(productId: any) {
      const headers = this.getHeaders();
      return this.http
        .delete(`${this.API_BASE_URL}/api/admin/products/${productId}/delete`, {
          headers,
        })
        .pipe(
          map((data: any) => {
            console.log('data', data);
            return deleteProductSuccess({ payload: productId });
          }),
          catchError((error: any) => {
            return of(
              deleteProductFailure(
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
              )
            );
          })
        )
        .subscribe((action) => this.store.dispatch(action));
    }
  
    findRecentllyAddedProduct() {
      const headers = this.getHeaders();
      return this.http
        .get(`${this.API_BASE_URL}/api/admin/products/recent`, { headers })
        .pipe(
          map((data: any) => {
            console.log('recent product ', data);
            return recentllyAddedProductsSuccess({ payload: data });
          }),
          catchError((error: any) => {
            return of(
              recentllyAddedProductsFailure(
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message
              )
            );
          })
        )
        .subscribe((action) => this.store.dispatch(action));
    }
  }
  