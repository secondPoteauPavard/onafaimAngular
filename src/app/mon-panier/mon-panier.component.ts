import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {

  monPanierlist: any[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.listProduit();
  }

  private listProduit() {
    this.monPanierlist = JSON.parse(sessionStorage.getItem('monPanier'));
    console.log(this.monPanierlist);
  }



}
