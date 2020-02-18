import {Component, OnInit} from '@angular/core';


import {InscriptionService} from '../services/inscription.service';
import {Router} from '@angular/router';
import {Compte} from '../model/compte';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  compte: Compte = new Compte();

    constructor(private inscriptionService: InscriptionService, private router: Router) {

    }


  ngOnInit(): void {
  }

  public inscription() {
    console.log(this.compte);
    this.inscriptionService.add(this.compte).subscribe(result => {
      this.router.navigate(['/home']);
    });
  }

}
