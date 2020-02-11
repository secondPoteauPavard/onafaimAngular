import { Injectable } from '@angular/core';
import {LigneCommande} from '../model/ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _ligneCommande: LigneCommande[] = [new LigneCommande()];

  constructor() { }

  get ligneCommande(): LigneCommande[] {
    return this._ligneCommande;
  }

  set ligneCommande(value: LigneCommande[]) {
    this._ligneCommande = value;
  }

  public delete(index: number) {
    this._ligneCommande.splice(index);
  }
}
