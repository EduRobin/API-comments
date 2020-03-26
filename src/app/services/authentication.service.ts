import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/User.model';
import {AuthenticationModel} from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public static token: AuthenticationModel = new AuthenticationModel('');

  constructor(private http: HttpClient) { }

  clickLogin(email: string, password: string) {
    return this.http.post<AuthenticationModel>('http://85.160.64.233:3000/session/login', {email, password});
  }

  clickRegister(email: string, username: string, password: string, checkpassword: string) {
    return this.http.post('http://85.160.64.233:3000/session/register', {email, username, password, checkpassword});
  }

  getLogout() {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);

    return this.http.delete<UserModel>('http://85.160.64.233:3000/session/logout', {headers});
  }

  setToken(token: AuthenticationModel) {
    console.log(token);
    AuthenticationService.token = token;
  }
}
