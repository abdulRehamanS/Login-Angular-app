import { Component } from '@angular/core';
import { Login } from '../login';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  login: Login = new Login();


  // injecting service class into component
  constructor(private service: UserloginService) {}

  onSubmit() {
    console.log(this.login);
    this.service.loginUser(this.login).subscribe(
      (data) => {
        alert('Login Successfull');
      },
      (error) => alert('Invalid Password')
    );
  }
}
