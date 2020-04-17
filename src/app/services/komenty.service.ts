import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KomentModel} from '../models/koment.mode';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class KomentyService {
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:variable-name
  getKoment(body: string, user_id: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);
    console.log(AuthenticationService.token.access_token);

    return this.http.post<KomentModel>('http://85.160.64.233:3000/comments', {body, user_id}, {headers});
  }
  getKomenty(id: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);
    console.log(AuthenticationService.token.access_token);

    return this.http.get('http://85.160.64.233:3000/comments/?user_id=' + id, {headers});
  }

  deleteKoment(id: number) {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);

    return this.http.delete('http://85.160.64.233:3000/comments/' + id, {headers});
  }
}
