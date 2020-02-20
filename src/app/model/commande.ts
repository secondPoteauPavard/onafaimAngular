import {EnumValue} from '@angular/compiler-cli/src/ngtsc/partial_evaluator';

export class Commande {

  constructor(private _panier?: object, public eval? : string, public etat?: EnumValue, public date?: Date, public id?: number) {
  }


  get panier(): object {
    return this._panier;
  }

  set panier(value: object) {
    this._panier = value;
  }
}
