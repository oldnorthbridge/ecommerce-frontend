import { Component } from '@angular/core';
import { UserService } from './State/User/user.service';
import { AppState } from './Model/AppState';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute

  ) {}


   ngOnInit() {
    // if(localStorage.getItem('jwt')) {
    //    this.userService.getUserProfile();
    // }
    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
       if(localStorage.getItem('jwt')) {
        this.userService.getUserProfile();
       }
      
    });
   

    // const currentPath = this.activatedRoute.snapshot.routeConfig
    // console.log('Current path:', currentPath);

    // console.log(this.activatedRoute.toString(),"router ----- ",this.router.routerState.snapshot)
  }

}
