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
  private ligneCommande: any = {};
  private commande: any = {};


  constructor(private http: HttpClient) { }

  private authentication() {
    this.headers = new HttpHeaders( {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('system:system')
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


  public EnregistrerCommandeEnBase(): Observable<any> {
    this.authentication();
    this.commande = `{"compte":{"id":${sessionStorage.getItem('id')}}}`;
    return this.http.post('http://localhost:8080/onafaim/commande/save', this.commande, this.options);
  }


  public EnregistrerLigneCommandeEnBase(monPanierList, c) {
    this.authentication();
    monPanierList.forEach((item, index) => {
      this.EnregistrerUneLigne(monPanierList[index].quantite, c.id, monPanierList[index].produit.id).subscribe();
    });
    this.authentication();
    return this.http.get('http://localhost:8080/onafaim/commande/' + c.id, this.options);
  }

  public EnregistrerUneLigne(quantite: number, idCommande: number, idProduit: number) {
    this.ligneCommande = `{"qte": ${quantite},"id": {"commande":{"id": ${idCommande}},"produit": {"id": ${idProduit}}}}`;
    return this.http.post('http://localhost:8080/onafaim/ligneCommande/save', this.ligneCommande, this.options);
  }
}
