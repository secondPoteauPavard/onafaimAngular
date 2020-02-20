import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtatCommandeService {

  private url: string = 'http://localhost:8080/onafaim/rest/etatEnum';
  private headers: HttpHeaders;
  private options: object;

  constructor(private http: HttpClient) { }

  private authentication() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('system:system')
    });
    this.options = {headers: this.headers};
  }

  public findAll(): Observable<any> {
    this.authentication();
    return this.http.get(this.url, this.options);
  }
}


