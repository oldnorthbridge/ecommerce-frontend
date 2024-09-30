import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/State/Auth/auth.service';
import { UserService } from 'src/app/State/User/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  @Input() switchToReister:any

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private authService: AuthService,
    // private userService: UserService
  ) {}
  submitForm() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      
    }
  }


}
