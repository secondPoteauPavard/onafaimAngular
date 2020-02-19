import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.css']
})
export class SandwichComponent implements OnInit {

  sandwichs: Produit[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.produitService.findAllByType('sandwich').subscribe(results => {
      this. sandwichs = results;
    }, error => {
      console.log('à refaire');
    });
  }

  public delete(id: number) {
    console.log(id);
    this.produitService.delete(id).subscribe(results => {
      console.log(results);
      this.list();
    });
  }


}
