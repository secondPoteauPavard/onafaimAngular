import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-viennoiserie',
  templateUrl: './viennoiserie.component.html',
  styleUrls: ['./viennoiserie.component.css']
})
export class ViennoiserieComponent implements OnInit {

  viennoiseries: Produit[] = [];
  listPanier: any[] = [];
  quantite: number;
  premierPassage = true;


  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.list();
  }

  // private list() {
  //   this.produitService.findAll().subscribe(result => {
  //     console.log(result);
  //     this.produits = result;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  private list() {
    this.produitService.findAllByType('viennoiserie').subscribe(results => {
      this.viennoiseries = results;
      console.log(this.viennoiseries);
    }, error => {
      console.log('à refaire');
    });
  }

  public delete(id: number) {
    this.produitService.delete(id).subscribe(results => {
      this.list();
    });
  }

  public save() {
    this.produitService.insert().subscribe(result =>{
      this.list();
    });
  }

  public send(indice: number) {
    if (this.premierPassage) {
      this.premierPassage = false;
      sessionStorage.setItem('monPanier', `{'indice': ${indice}, 'quantite': ${this.quantite}}`);
    }
    sessionStorage.setItem('monPanier', `${sessionStorage.getItem('monPanier')},{'indice': ${indice}, 'quantite': ${this.quantite}}`);
    // this.listPanier = JSON.parse(sessionStorage.getItem('monPanier')).push({'indice': indice, 'quantite': this.quantite});
    // sessionStorage.setItem('monPanier', JSON.stringify(this.listPanier));
    console.log(sessionStorage.getItem('monPanier'));
  }


  // public update(prix: number) {
  //   this.produitService.modifierPrix(prix).subscribe(result =>{
  //     this.list();
  //   });
  // }

}
