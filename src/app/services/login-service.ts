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
      'Authorization': 'Basic ' + btoa('system:system')
    });
    const options = {headers: headers};
    console.log(user);
    return this.http.post(this.url, user,  options);
  }
}
