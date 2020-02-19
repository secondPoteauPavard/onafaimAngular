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


  public EnregistrerCommandeEnBase(monPanierList) {
    this.authentication();
    this.commande = `{"compte":{"id":${sessionStorage.getItem('id')}}}`;
    console.log(this.commande);
    return this.http.post('http://localhost:8080/onafaim/commande/save', this.commande, this.options);
  }

  // Comment récupérer l'id de la commande auto généré ci dessus ??   --> A intégrer en dessous

  public EnregistrerLigneCommandeEnBase(monPanierList) {
    this.authentication();
    this.ligneCommande = `{"qte": ${monPanierList.qte},"id": {"commande":{"id": 105},"produit": {"id": ${monPanierList.produit.id}}}`;
    console.log(this.ligneCommande);
    return this.http.post('http://localhost:8080/onafaim/commande/save', this.ligneCommande, this.options);
  }
}
