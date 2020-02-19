import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {

  monPanierlist = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.listProduit();
  }

  private listProduit() {
    this.monPanierlist = JSON.parse(sessionStorage.getItem('monPanier'));
  }

  deleteLine(index: number) {
    this.monPanierlist.splice(index, 1);
    sessionStorage.setItem('monPanier', JSON.stringify(this.monPanierlist));
  }


  validerPanier() {
  }

  abandonnerPanier() {
    this.monPanierlist = [];
    sessionStorage.removeItem('monPanier');
    sessionStorage.setItem('panierVide', 'false');
  }



}
