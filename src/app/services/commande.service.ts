import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Commande} from '../model/commande';
import {Observable} from 'rxjs';

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

  public findAll(): Observable<any> {
    this.authentication();
    return this.http.get(this.url, this.options);
  }

  public findById(i: number): Observable<any> {
    this.authentication();
    return this.http.get(this.url + '/' + i, this.options);
  }

  public save(commande: Commande): Observable<any> {
    this.authentication();
    return this.http.put('http://localhost:8080/onafaim/rest/commande/save', commande, this.options);
  }

/*
  public addCommandeClient(c: Commande) {
    this.listCommande.push(c);
  }
*/

}
