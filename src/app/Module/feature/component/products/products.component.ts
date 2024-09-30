import { Component } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { ProductService } from 'src/app/State/Product/product.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/Model/AppState';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  pageSize:any = 2
  pageNumber:any=0
  filterData:any
  singleFilterData:any
  products:any
  routerEventsSubscription:any
  lavelThree:string
  constructor(private router :Router ,private route: ActivatedRoute,private productService: ProductService, private store:Store) {

  }

  ngOnInit() {
    this.filterData = filters
    this.singleFilterData = singleFilter
    // this.menPangts = mensPantsPage1
    this.route.paramMap.subscribe(
      (params) => {
        
        var reqData = {
          category: params.get('lavelThree'),
          colors: [],
          sizes: [],
          minPrice: 0,
          maxPrice: 10000,
          minDiscount: 0,
          sort: 'price_low',
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          stock: null,
        };

        this.productService.findProductsByCategory(reqData);

        // console.log('reqData - change', this.lavelThree, reqData);
        // this.lavelOne = params.get('lavelOne');
        // this.lavelTwo = params.get('lavelTwo');
        this.lavelThree = params.get('lavelThree');
      }
    );
    this.route.queryParams.subscribe(
      (params) => {
        const color = params['color']; 
        const size = params['size']; 
        const price = params['price']; 
        const discount = params['disccout']; 
        const stock = params['stock']; 
        const sort = params['sort'];
        const minPrice = price?.split('-')[0];
        const maxPrice = price?.split('-')[1];
        const pageNumber = params['pageNumber'];

        const updatedReqData = {
          category: this.lavelThree,
          colors: params['color'] ? [params['color']].join(',') : [], 
          sizes: size,
          minPrice: params['price'] ? minPrice : 0,
          maxPrice: params['price'] ? maxPrice : 100000,
          minDiscount: discount ? discount : 0,
          sort: sort ? sort : 'price_low',
          // pageNumber: pageNumber ? pageNumber - 1 : 0,
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          stock: null,
        };
        console.log("update ...",updatedReqData.colors)

        this.productService.findProductsByCategory(updatedReqData);
      }
    );

    this.store
      .pipe(select((store: AppState) => store.product))
      .subscribe((product) => {
       
        this.products = product.products
       

      });


  }

  handleMutipleSelectFilter(value:string, sectionId: string) {
    const queryParams = {...this.route.snapshot.queryParams}
    const filterValues = queryParams[sectionId]?queryParams[sectionId].split(","):[]
    const valueIndex = filterValues.indexOf(value)
    if(valueIndex != -1) {
      filterValues.splice(valueIndex, 1)
    } else {
      filterValues.push(value)
    }

    if(filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(",")
    } else {
      delete queryParams[sectionId]
    }

    this.router.navigate([],{queryParams})
  }


  handleSingleSelectFilter(value:string, sectionId:string) {
    const queryParams = {...this.route.snapshot.queryParams}
    queryParams[sectionId] = value

    this.router.navigate([],{queryParams})

   
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex
    this.pageSize = event.pageSize
    

    this.route.queryParams.subscribe(
      (params) => {
        const price = params['price']; 
        const minPrice = price?.split('-')[0];
        const maxPrice = price?.split('-')[1];
        var reqData = {
          category: this.lavelThree,
          colors: params['color'] ? [params['color']].join(',') : [], 
          sizes: [],
          minPrice: params['price'] ? minPrice : 0,
          maxPrice: params['price'] ? maxPrice : 100000,
          minDiscount: 0,
          sort: 'price_low',
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
          stock: null,
        };
        console.log("pageChange",params['color'])

        this.productService.findProductsByCategory(reqData);

        // console.log('reqData - change', this.lavelThree, reqData);
        // this.lavelOne = params.get('lavelOne');
        // this.lavelTwo = params.get('lavelTwo');
        
      }
    );
  }

 
}
