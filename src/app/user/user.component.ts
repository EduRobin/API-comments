import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../services/authentication.service';
import {UserModel} from '../models/User.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private email = '';
  private pagecount: number;
  private id = '';
  private username = '';
  private users = [];
  private logoutURL = ' http://85.160.64.233:3000/user';



  // tslint:disable-next-line:max-line-length
  constructor(private httpClient: HttpClient, private router: Router, private user: UserService, private auth: AuthenticationService, private userlogout: AuthenticationService) {
  }
  load() {
    this.user.getUser().subscribe(
      (data: UserModel) => {
        this.users = data['users'];
        this.pagecount = data.page_count + 1;
        console.log(this.users);
      }, (error) => {

      }
    );
  }

  clickProfile(id: number) {
    this.router.navigate(['/koment'],  {queryParams: {id}});
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'));
      AuthenticationService.token.access_token = (localStorage.getItem('token'));

      this.router.navigate(['/user']);
    }

    this.load();
  }

  clickPage(page: number) {
    this.user.getPage(page).subscribe(
      (data: UserModel) => {
        this.users = data['users'];
        this.pagecount = data.page_count + 1;
        console.log(this.users);
      }, (error) => {

      }
    );
  }
  get pageCount(): IterableIterator<number> {
    return new Array(this.pagecount).keys();
  }

  clickMe() {
    this.auth.getLogout().subscribe(
      (data: any) => {
        AuthenticationService.token.access_token = '';
        this.router.navigate(['/home']);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
