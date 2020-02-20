import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-gateau',
  templateUrl: './gateau.component.html',
  styleUrls: ['./gateau.component.css']
})
export class GateauComponent implements OnInit {

  gateaux: Produit[] = [];
  quantite: number;
  ligneCommande: any = {};


  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    sessionStorage.setItem('panierVide', 'true');
    this.list();
  }

  get role(){
    return sessionStorage.getItem('role');
  }

  private list() {
    this.produitService.findAllByType('gateau').subscribe(results => {
      this.gateaux = results;
    }, error => {
      console.log('à refaire');
    });
  }

  public delete(id: number) {
    this.produitService.delete(id).subscribe(results => {
      this.list();
    });
  }

  public send(indice: number) {
    if (sessionStorage.getItem('monPanier')) {
      sessionStorage.setItem('panierVide', 'false');
    }
    this.ligneCommande.indice = indice;
    this.ligneCommande.quantite = this.quantite;
    this.ligneCommande.produit = this.gateaux[indice];
    if (sessionStorage.getItem('panierVide') === 'true') {
      const monPanier: Array<any> = new Array();
      monPanier.push(this.ligneCommande);
      sessionStorage.setItem('monPanier', JSON.stringify(monPanier));
      sessionStorage.setItem('panierVide', 'false');
    } else {
      const monPanier: Array<any> = JSON.parse(sessionStorage.getItem('monPanier'));
      monPanier.push(this.ligneCommande);
      sessionStorage.setItem('monPanier', JSON.stringify(monPanier));
    }
  }

  public update(indice: number){

  }

}
