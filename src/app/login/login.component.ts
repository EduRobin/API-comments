import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {AuthenticationModel} from '../models/authentication.model';


class Authentication {
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  private email = '';
  private password = '';

  constructor(private http: HttpClient, private router: Router, private authentication: AuthenticationService) {

  }

  clickMeToLogin() {
    this.authentication.clickLogin(this.email, this.password).subscribe(
      (data: AuthenticationModel) => {

        const emailStorage = this.email.valueOf();
        const passwordStorage = this.password.valueOf();
        const accesTokenStorage = AuthenticationService.token.access_token;

        localStorage.setItem(emailStorage, passwordStorage);
        localStorage.setItem('token', accesTokenStorage);

        this.authentication.setToken(data);
        console.log(data);
        this.router.navigate(['/loggedin']);
      }, (error) => {

      }
    );
  }



  ngOnInit() {
  }

}
