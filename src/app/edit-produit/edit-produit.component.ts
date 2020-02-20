import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';
import {Router} from '@angular/router';

import {TypeProduitService} from '../services/type-produit.service';
import {TailleService} from '../services/taille.service';


@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  public produit: Produit = new Produit();
  public tailles = [];
  public typesProd = [];

  constructor(private produitService: ProduitService,
              private tailleService: TailleService,
              private typeProduitService: TypeProduitService,
              private router: Router) {
    this.typeProduitService.findAll().subscribe(result => {
      this.typesProd = result;
    });

    this.tailleService.findAll().subscribe(result => {
      this.tailles = result;
    });

  }

  ngOnInit() {
  }

  public save() {
    console.log('je suis la');
    this.produitService.insert(this.produit).subscribe(result => {
      console.log('je suis encore la')
      this.router.navigate(['/home']);
    });
  }


}
