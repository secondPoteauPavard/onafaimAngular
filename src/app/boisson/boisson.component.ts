import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

  boissons: Produit[] = [];


  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.produitService.findAllByType('boisson').subscribe(results => {
      this.boissons = results;
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

}
