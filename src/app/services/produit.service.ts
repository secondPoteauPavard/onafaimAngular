import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url: string = 'http://localhost:8080/onafaim/rest/page'
  private headers: HttpHeaders;
  private options: object;

  constructor(private http: HttpClient) { }

  public findAllByType(): Observable<any> {
    return this.http.get(this.url, this.options);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }

  public insert(produit: Produit): Observable<any>{
    return this.http.post(this.url, this.options);
  }


}
