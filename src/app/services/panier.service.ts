import { Injectable } from '@angular/core';
import {LigneCommande} from '../model/ligne-commande';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private url: string = 'http://localhost:8080/onafaim/panier/2'
  private headers: HttpHeaders;
  private options: object;

  constructor(private http: HttpClient) { }

  private authentication() {
    this.headers = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + sessionStorage.getItem('user')
    });
    this.options = {headers: this.headers};
  }

  public findAll(): Observable<any> {
    this.authentication();
    return this.http.get(this.url, this.options);
  }
/*
  public delete(nom: string): Observable<any> {
    this.authentication();
    return this.http.delete(this.url + '/' + nom, this.options);
  }*/

  public EnregistrerEnBase() {
    this.authentication();
    // return this.http.get(this.url, this.options);
  }

}
