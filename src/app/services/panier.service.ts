import { Injectable } from '@angular/core';
import {LigneCommande} from '../model/ligne-commande';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
/*
  private _ligneCommande: LigneCommande[] = [new LigneCommande()];
  private url: string = 'http://localhost:8080/onafaim/panier'

  constructor(private http: HttpClient) { }

  get ligneCommande(): LigneCommande[] {
    return this._ligneCommande;
  }

  set ligneCommande(value: LigneCommande[]) {
    this._ligneCommande = value;
  }

  public delete(index: number) {
    this._ligneCommande.splice(index);
  }*/
}
