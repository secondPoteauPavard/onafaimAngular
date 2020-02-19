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

  private url: string = 'http://localhost:8080/onafaim/rest/page/produit';
  private url2: string = 'http://localhost:8080/onafaim/accueil'
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

  public findAll(): Observable<any>{
    this.authentication();
    return this.http.get(this.url, this.options);
  }

  public findById(id: number): Observable<any>{
    this.authentication();
    id = id + 1;
    return this.http.get(this.url + '/' + id, this.options);
  }


  public findAllByType(type: string): Observable<any> {
    this.authentication();
    if (type === 'viennoiserie') {
      return this.http.get(this.url + '/' + type, this.options);
    };
    if (type === 'sandwich') {
      return this.http.get(this.url + '/' + type, this.options);
    };
    if (type === 'boisson') {
      return this.http.get(this.url + '/' + type, this.options);
    };
    if (type === 'gateau') {
      return this.http.get(this.url + '/' + type, this.options);
    }
  }

  public delete(id: number): Observable<any> {
    this.authentication();
    return this.http.delete(`${this.url}/${id}`, this.options);
  }


  public insert(produit: Produit): Observable<any>{
    this.authentication();
    const o: object = {
     libelle: produit.libelle,
     taille: produit.taille,
     prix: produit.prix,
     type: produit.type,
     description: produit.description,
     photo: produit.photo
   };
    return this.http.post(`${this.url}/${produit.libelle}`, o, this.options);
  }

  // public modifierPrix(prix: number): Observable<any>{
  //   this.authentication();
  //   return this.http.post(this.url, this.options);
  // }



}
