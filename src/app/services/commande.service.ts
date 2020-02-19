import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private url: string = 'http://localhost:8080/onafaim/rest/listCommande';
  private headers: HttpHeaders;
  private options: object;

  constructor(private http: HttpClient) { }

  private authentication(){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('system:system')
    });
    this.options = {headers: this.headers};
  }


}
