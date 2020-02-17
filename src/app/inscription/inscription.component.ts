import { Component, OnInit } from '@angular/core';
import {Compte} from '../model/compte';
import {LoginService} from '../services/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private _erreur: boolean = false;
  private _compte: Compte = new Compte();

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }

  get compte(): Compte {
    return this._compte;
  }

  set compte(value: Compte) {
    this._compte = value;
  }

send() {
  //   this.loginService.login(this._user).subscribe(result => {
  //     sessionStorage.setItem('user', btoa(`${this._user.login}:${this._user.password}`));
  //     sessionStorage.setItem('token', this._user.login);
  //     this.router.navigate(['/home']);
  //   }, error => {
  //     this.erreur = true;
  //   });
  }

}
