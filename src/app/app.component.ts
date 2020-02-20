import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onafaimAngular';

  private user = sessionStorage.getItem('user');

  constructor(private router: Router){

  }

  get token() {
    return sessionStorage.getItem('token');
  }

  get role(){
    return sessionStorage.getItem('role');
  }

}
