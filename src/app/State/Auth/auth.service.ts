import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from "./auth.action";
import { Action } from "rxjs/internal/scheduler/Action";


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = BASE_API_URL + "/auth"
    constructor(private http:HttpClient,private store:Store) {

    }
    login(loginData:any) {
        return this.http.post(`${this.apiUrl}/signin`,loginData)
        .pipe(
            map((user:any)=>{
                if (user.jwt) {
                  localStorage.setItem('jwt', user.jwt);
                  
                }
                return loginSuccess({ user });
                
      
            }),
            catchError((error) => {
                return of(
                    loginFailure(
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message
                    )
                );
            })
      

        )
        .subscribe((action) => {
          // 这里的实际上就是根据pipe里action.
          this.store.dispatch(action)
        });

    }

    register(data: any) {
        const registerData = {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        };
        return this.http
          .post(`${this.apiUrl}/signup`, registerData)
          .pipe(
            map((data: any) => {
              if (data.jwt) {
                localStorage.setItem('jwt', data.jwt);
                
              }
              return registerSuccess({ user: data });
            }),
            catchError((error) => {
              console.error('Error registering', error);
              return of(
                registerFailure(
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
