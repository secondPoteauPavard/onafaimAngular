import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../model/produit';
import {ViennoiserieComponent} from '../viennoiserie/viennoiserie.component';
import {SandwichComponent} from '../sandwich/sandwich.component';
import {BoissonComponent} from '../boisson/boisson.component';
import {GateauComponent} from '../gateau/gateau.component';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url: string = 'http://localhost:8080/onafaim/rest/page/produit'
  private headers: HttpHeaders;
  private options: object;

  constructor(private http: HttpClient) { }

  private authentication(){
    console.log(sessionStorage.getItem('ROLE_ADMIN'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic' + sessionStorage.getItem('ROLE_ADMIN')
    });
    this.options = {headers: this.headers};
  }

  public findAll(): Observable<any>{
    return this.http.get(this .url, this.options);
  }


  public findAllByType(type: string): Observable<any> {
    // const o: object = {
    //   type: produit.type
    // }
    if (type === 'Viennoiserie') {
    return this.http.get(this.url + '/' + type, this.options);
    };
    if (type === 'Sandwich') {
      return this.http.get(this.url + '/' + type, this.options);
    };
    if (type === 'Boisson') {
      return this.http.get(this.url + '/' + type, this.options);
    };
    if (type === 'Gateau') {
      return this.http.get(this.url + '/' + type, this.options);
    }
  }

  public delete(id: number): Observable<any> {
    this.authentication();
    return this.http.delete(this.url + '/' + id);
  }


  public insert(produit: Produit): Observable<any>{
    this.authentication();
   //  const o: object = {
   //   libelle: produit.libelle,
   //   taille: produit.taille,
   //   prix: produit.prix,
   //   type: produit.type,
   //   description: produit.description,
   //   photo: produit.photo
   // };
    return this.http.post(this.url, this.options);
  }

}
