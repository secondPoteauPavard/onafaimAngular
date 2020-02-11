import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/onafaim/auth/connexion';

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${user.login}:${user.password}`)
    });
    const options: object = {
      headers: headers
    };
    return this.http.get(this.url, options);
  }
}
