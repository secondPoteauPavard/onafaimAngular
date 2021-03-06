export class Produit {

  constructor(public id?: number, public _libelle?: string, public _taille?: string, public _prix?: number, public _type?: string, public _description?: string, public _photo?: string) {
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

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }
}
