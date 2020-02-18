export class LigneCommande {

  constructor(private _qte?: number, private _libelle?: string, private _taille?: string, private _prix?: number) {
  }


  get qte(): number {
    return this._qte;
  }

  set qte(value: number) {
    this._qte = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get taille(): string {
    return this._taille;
  }

  set taille(value: string) {
    this._taille = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }
}
