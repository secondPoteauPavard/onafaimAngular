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


  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.list();
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


}
