import { Component, OnInit } from '@angular/core';
import {LigneCommande} from '../model/ligne-commande';
import {PanierService} from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(private _panierService: PanierService) {
    this._panierService = _panierService;
  }

  ngOnInit(): void {
  }

  /*get panierService(): PanierService {
    return this._panierService;
  }

  set panierService(value: PanierService) {
    this._panierService = value;
  }

  public supprimer(index: number) {
    this._panierService.delete(index);
  }*/
}
