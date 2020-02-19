import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TailleService {

  private url: string = 'http://localhost:8080/onafaim/rest/page/produit/findsize';

  constructor(private http: HttpClient) { }


  public findAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
