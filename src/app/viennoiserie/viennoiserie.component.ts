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
  ligneCommande: any = {};



  constructor(private produitService: ProduitService) {
  }

  ngOnInit() {
    sessionStorage.setItem('panierVide', 'true');
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
    this.produitService.findById(indice).subscribe(results => {
      this.ligneCommande.produit = results;
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
    });
  }


}
