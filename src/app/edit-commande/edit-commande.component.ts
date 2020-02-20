import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Commande} from '../model/commande';
import {CommandeService} from '../services/commande.service';

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.css']
})
export class EditCommandeComponent implements OnInit {

  commande: Commande;
  private index: number;

  constructor(public commandeService: CommandeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params.index) {
        this.index = params.index;
      }
    });
  }

  ngOnInit(): void {
  }

  private getCommandeAVoir() {
    this.commandeService.findById(this.index).subscribe(result => {
      this.commande = result;
    });
  }

}
