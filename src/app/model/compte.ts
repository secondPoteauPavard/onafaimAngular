export class Compte {

  constructor(private _email?: string, private _password?: string, private _nom?: string, private _prenom?: string, private _numero?: string) {
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(value: string) {
    this._numero = value;
  }
}
