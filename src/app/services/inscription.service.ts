import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Compte} from '../model/compte';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private url: string = 'http://localhost:8080/onafaim/rest/auth/inscription' ;
  private headers: HttpHeaders;
  private option: object;

  constructor(private http: HttpClient) {

  }

  private authentification() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.option = {headers: this.headers};
  }

  public add(compte: Compte): Observable<any> {
    console.log(JSON.stringify(compte) + 'service')
    return this.http.post(this.url, compte, this.option);
  }
}
