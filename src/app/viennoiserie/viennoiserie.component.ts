import {Component, OnInit} from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-viennoiserie',
  templateUrl: './viennoiserie.component.html',
  styleUrls: ['./viennoiserie.component.css']
})
export class ViennoiserieComponent implements OnInit {

  viennoiseries: Produit[] = [];
  quantite: number;
  premierPassage = true;


  constructor(private produitService: ProduitService) {
  }

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

  public send(indice: number) {
    const ligneCommande: any = {};

    ligneCommande.indice = indice;
    ligneCommande.quantite = this.quantite;

    if (this.premierPassage) {
      const monPanier: Array<any> = new Array();
      monPanier.push(ligneCommande);
      sessionStorage.setItem('monPanier', JSON.stringify(monPanier));
      this.premierPassage = false;
    } else {
      const monPanier: Array<any> = JSON.parse(sessionStorage.getItem('monPanier'));
      monPanier.push(ligneCommande);
      console.log(monPanier);
      sessionStorage.setItem('monPanier', JSON.stringify(monPanier));
    }
  }


}
