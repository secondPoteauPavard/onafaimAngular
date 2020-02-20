import { Component, OnInit } from '@angular/core';
import {Commande} from '../model/commande';
import {CommandeService} from '../services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandes: Commande[] = [];
  /*private filtre = '';*/

  constructor(public listCommande: CommandeService) { }

  ngOnInit() {
    this.list();
  }

/*  public listeCommande(){
    return this.commandes.filter(commande => {
      return commande.etat.enumRef(this.filtre) !==-1;
    });
  }*/

  private list() {
    return this.listCommande.findAll().subscribe(result => {
      this.commandes = result;
    });
  }

  stockerIdCommandeAModifier(index) {
    sessionStorage.setItem('indexCommande', JSON.stringify(this.commandes[index].id));
  }


}
