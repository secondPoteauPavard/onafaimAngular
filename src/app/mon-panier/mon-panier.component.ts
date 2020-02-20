import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';
import {element} from 'protractor';
import {PanierService} from '../services/panier.service';
import {Commande} from '../model/commande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mon-panier',
  templateUrl: './mon-panier.component.html',
  styleUrls: ['./mon-panier.component.css']
})
export class MonPanierComponent implements OnInit {

  monPanierlist = [];
  prixTotal: number;
  private commande: any = {};


  constructor(private produitService: ProduitService, private panierService: PanierService, private router: Router) { }

  ngOnInit(): void {
    this.listProduit();
    this.updatePrixTotal();
  }


  private listProduit() {
    this.monPanierlist = JSON.parse(sessionStorage.getItem('monPanier'));
  }

  deleteLine(index: number) {
    this.monPanierlist.splice(index, 1);
    sessionStorage.setItem('monPanier', JSON.stringify(this.monPanierlist));
    this.updatePrixTotal();
  }


  validerPanier() {
    this.panierService.EnregistrerCommandeEnBase().subscribe(result => {
      this.commande = result;
      this.panierService.EnregistrerLigneCommandeEnBase(this.monPanierlist, this.commande).subscribe(result2 => {
        this.abandonnerPanier();
        this.router.navigate(['/success']);
      });
    });
  }

  abandonnerPanier() {
    this.monPanierlist = [];
    sessionStorage.removeItem('monPanier');
    sessionStorage.setItem('panierVide', 'false');
    this.updatePrixTotal();
  }

  updatePrixTotal() {
    this.prixTotal = 0;
    if (this.monPanierlist) {
      this.monPanierlist.forEach(element => {
        this.prixTotal = this.prixTotal + (element.produit.prix) * (element.quantite);
      });
    }
  }

}
