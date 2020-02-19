import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';
import {element} from 'protractor';
import {PanierService} from '../services/panier.service';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {

  monPanierlist = [];
  prixTotal: number;

  constructor(private produitService: ProduitService, private panierService: PanierService) { }

  ngOnInit(): void {
    this.listProduit();
    this.prixTotal = 0;
    this.monPanierlist.forEach(element => {
      this.prixTotal = this.prixTotal + (element.produit.prix) * (element.quantite);
    });
  }

  private listProduit() {
    this.monPanierlist = JSON.parse(sessionStorage.getItem('monPanier'));
    console.log(this.monPanierlist);
  }

  deleteLine(index: number) {
    this.monPanierlist.splice(index, 1);
    sessionStorage.setItem('monPanier', JSON.stringify(this.monPanierlist));
  }


  validerPanier() {
    this.panierService.EnregistrerEnBase();
    this.abandonnerPanier();
  }

  abandonnerPanier() {
    this.monPanierlist = [];
    sessionStorage.removeItem('monPanier');
    sessionStorage.setItem('panierVide', 'false');
  }



}
