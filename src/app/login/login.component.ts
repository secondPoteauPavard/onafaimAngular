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

  user: User = new User();
  erreur: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit() {
  }

  send() {
    this.loginService.login(this.user).subscribe(result => {
      sessionStorage.setItem('user', btoa(`${this.user.email}:${this.user.password}`));
      sessionStorage.setItem('token', this.user.email);
      this.router.navigate(['/home']);
    }, error => {
      this.erreur = true;
    });
  }

}
