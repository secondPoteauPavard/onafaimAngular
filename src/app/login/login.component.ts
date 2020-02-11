import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {LoginService} from '../services/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private _user: User = new User();
  private _erreur: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }

  ngOnInit() {
  }

  send() {
    this.loginService.login(this._user).subscribe(result => {
      sessionStorage.setItem('user', btoa(`${this._user.login}:${this._user.password}`));
      sessionStorage.setItem('token', this._user.login);
      this.router.navigate(['/home']);
    }, error => {
      this._erreur = true;
    });
  }

}
