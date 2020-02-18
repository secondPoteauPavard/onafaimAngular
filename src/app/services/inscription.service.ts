import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Compte} from '../model/compte';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private url: string = 'http://localhost:8080/onafaim/rest/auth/inscription' ;

  constructor(private http: HttpClient) {

  }


  public add(compte: Compte): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Authorization': 'No Auth '
    });
    const options = {headers: headers};
    console.log(JSON.stringify(compte) + 'service');
    return this.http.post(this.url, compte, options);
  }

}
