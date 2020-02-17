export class Commande {

  constructor(private _panier: object) {
  }


  get panier(): object {
    return this._panier;
  }

  set panier(value: object) {
    this._panier = value;
  }
}
