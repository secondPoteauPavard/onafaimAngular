import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Compte} from '../model/compte';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private url: string = 'http://localhost:8080/onafaim/rest/auth/inscription'

  constructor(private http: HttpClient) {

  }

  public add(compte: Compte): Observable<any> {
    const o: object = {
      nom: compte.nom,
      prenom: compte.prenom,
      numero: compte.numero,
      email: compte.email,
      password: compte.password
    };
    return this.http.post(this.url, o);
  }
}
