import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {

  monPanierlist = [];
  monPanierAffichage = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.listProduit();
  }

  // private listProduit() {
  //   console.log(sessionStorage.getItem('monPanier'));
  //   this.monPanierlist = JSON.parse(sessionStorage.getItem('monPanier'));
  //   console.log(this.monPanierlist);
  // }

  private listProduit() {
    console.log(sessionStorage.getItem('monPanier'));
    this.monPanierlist = JSON.parse(sessionStorage.getItem('monPanier'));
    console.log(this.monPanierlist);
  }



}
