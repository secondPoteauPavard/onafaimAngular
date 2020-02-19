import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onafaimAngular';

  private user = sessionStorage.getItem('user');

  get token() {
    return sessionStorage.getItem('token');
  }

  get role(){
    return sessionStorage.getItem('role');
  }
}
