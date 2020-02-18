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


  // public update(prix: number) {
  //   this.produitService.modifierPrix(prix).subscribe(result =>{
  //     this.list();
  //   });
  // }

}
