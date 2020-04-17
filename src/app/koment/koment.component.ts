import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../services/authentication.service';
import {KomentModel} from '../models/koment.mode';
import {KomentyService} from '../services/komenty.service';
import AccessToken from '../AccessToken';
import {UserModel} from '../models/User.model';

@Component({
  selector: 'app-koment',
  templateUrl: './koment.component.html',
  styleUrls: ['./koment.component.scss']
})
// tslint:disable-next-line:class-name
export class KomentComponent implements OnInit {

  private user: UserModel;
  private user2: UserModel;
  private com: string;
  private comments = [];
  // tslint:disable-next-line:variable-name
  private user_id: number;
  private body: string;
  // tslint:disable-next-line:variable-name
  private username: string;
  private id: number;
  // tslint:disable-next-line:variable-name
  private trash = false;
  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private profile: UserService, private userlogout: AuthenticationService, private comment: KomentyService) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.profile.getID(i.id).subscribe(user => {
        this.user2 = user;
        console.log(this.user);
        this.comment.getKomenty(this.user2.id).subscribe( ( data: KomentModel) => {
          this.comments = data['comments'];
          console.log(this.comments);
        });
      });
    });
  }

  sendComment() {
    this.comment.getKoment(this.com, this.user2.id).subscribe(
      (data: KomentModel) => {

        this.trash = true;
        this.body = data.body;
        this.user_id = data.user_id;
        this.username = data.author_id.username;
        this.id = data.id;
        console.log(this.body);
      });
  }

  clickTrash() {
    this.comment.deleteKoment(this.id).subscribe(
      (data: KomentModel) => {
        this.body = '';
        this.username = '';
        this.trash = false;
      });
  }

  logoutClick() {
    this.userlogout.getLogout()
      .subscribe(
        (data: any) => {
          AuthenticationService.token.access_token = '';
          console.log(AccessToken.token);
        }, (error) => {
        }
      );
  }


}
