import { Component, OnInit } from '@angular/core';
import {LigneCommande} from '../model/ligne-commande';
import {PanierService} from '../services/panier.service';
import {Commande} from '../model/commande';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  commande: Commande;
  constructor(private panierService: PanierService ) { }


  ngOnInit() {
    this.list();
  }

  private list() {
    this.panierService.findAll().subscribe(result => {
      this.commande = result;
    }, error => {
      console.log(error);
    });
  }

  /*public delete(nom: string) {
    this.panierService.delete(nom).subscribe(result => {
      this.list();
    });
  }*/
}
