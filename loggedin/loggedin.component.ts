import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import AccessToken from '../AccessToken';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private logoutURL = 'http://85.160.64.233:3000/session/logout';


  ngOnInit() {
  }

  clickMe() {
    const headers = new HttpHeaders().set('User-Token', AccessToken.token);
    this.httpClient.delete(this.logoutURL, {
        headers
    }).subscribe(
      (data: any) => {
        AccessToken.token = '';
        this.router.navigate(['/home']);
      }, (error) => {
      }
    );
  }

}
