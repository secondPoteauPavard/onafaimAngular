import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url: string = 'http://localhost:8080/onafaim/rest/page/produit'
  private headers: HttpHeaders;
  private options: object;

  constructor(private http: HttpClient) { }

  private authentification(){
    console.log(sessionStorage.getItem('ROLE_ADMIN'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic' + sessionStorage.getItem('ROLE_ADMIN')
    });
    this.options = {headers: this.headers};
  }


  public findAllByType(produit: Produit): Observable<any> {
    const o: object = {
      type: produit.type
    }
    return this.http.get(this.url, this.options);
  }

  public delete(id: number): Observable<any>{
    this.authentification();
    return this.http.delete(this.url + '/' + id);
  }


  public insert(produit: Produit): Observable<any>{
    this.authentification();
    const o: object = {
     libelle: produit.libelle,
     taille: produit.taille,
     prix: produit.prix,
     type: produit.type,
     description: produit.description,
     photo: produit.photo
   };
    return this.http.post(this.url, this.options);
  }



  


}
