import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/onafaim/rest/login';

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${user.login}:${user.password}`)
    });
    const options: object = {
      headers: headers
    };
/*    const o: object = {
      login: user.login,
      password: user.password
    };*/
    return this.http.get(this.url, options);
  }
}
