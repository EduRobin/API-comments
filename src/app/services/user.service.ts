import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/User.model';

import {AuthenticationService} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  getPage(page: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    return this.http.get<UserModel>('http://85.160.64.233:3000/users/?page=' + page, {headers}) ;
  }
  getUser() {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);

    return this.http.get<UserModel>('http://85.160.64.233:3000/users', {headers});
  }

  getID(id: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);
    return this.http.get<UserModel>('http://85.160.64.233:3000/user/' + id, {headers});
  }


  constructor(private http: HttpClient, private auth: AuthenticationService) { }
}
