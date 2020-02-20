import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Commande} from '../model/commande';
import {CommandeService} from '../services/commande.service';
import {EnumValue} from '@angular/compiler-cli/src/ngtsc/partial_evaluator';
import {TailleService} from '../services/taille.service';
import {EtatCommandeService} from '../services/etat-commande.service';

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.css']
})
export class EditCommandeComponent implements OnInit {

  commande: Commande;
  private index: number;
  public commandeEtat = [];


  constructor(public commandeService: CommandeService, private etatCommandeService: EtatCommandeService) {
    this.etatCommandeService.findAll().subscribe(result => {
      this.commandeEtat = result;
    });
  }

  ngOnInit(): void {
    this.getCommandeAVoir();
  }

  getCommandeAVoir() {
    if (sessionStorage.getItem('indexCommande')) {
      this.commandeService.findById(JSON.parse(sessionStorage.getItem('indexCommande'))).subscribe(result => {
        this.commande = result;
      });
    }
  }

   validerLaCommande() {
    this.commande.etat = this.commandeEtat[0];
    this.commandeService.save(this.commande).subscribe(result => {
      console.log(result);
    });
  }

}
