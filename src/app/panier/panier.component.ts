import { Component, OnInit } from '@angular/core';
import {LigneCommande} from '../model/ligne-commande';
import {PanierService} from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(private panierService: PanierService) {
    this.panierService = panierService;
  }

  ngOnInit(): void {
  }

  public supprimer(index: number) {
    this.panierService.delete(index);
  }
}
