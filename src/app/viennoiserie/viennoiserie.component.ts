import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-viennoiserie',
  templateUrl: './viennoiserie.component.html',
  styleUrls: ['./viennoiserie.component.css']
})
export class ViennoiserieComponent implements OnInit {

  produits: Produit[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.produitService.findAllByType().subscribe(results =>{
      this.produits = results;
    }, error => {
      console.log('à refaire');
    });
  }

  public delete(id: number) {
    this.produitService.delete(id).subscribe(results => {
      this.list();
    });
  }


}
