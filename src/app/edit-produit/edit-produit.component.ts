import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../services/produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  public produit: Produit = new Produit();

  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit() {
  }

  public save() {
    this.produitService.insert(this.produit).subscribe(result =>{
      this.router.navigate(['/produit/:add']);
    });
  }

}
