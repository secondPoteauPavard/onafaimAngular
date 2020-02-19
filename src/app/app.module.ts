import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { ViennoiserieComponent } from './viennoiserie/viennoiserie.component';
import { LogoutComponent } from './logout/logout.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BoissonComponent } from './boisson/boisson.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { GateauComponent } from './gateau/gateau.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { MonPanierComponent } from './mon-panier/mon-panier.component';
import { ChoixEnumComponent } from './choix-enum/choix-enum.component';
import { CommandeComponent } from './commande/commande.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PanierComponent,
    ViennoiserieComponent,
    LogoutComponent,
    InscriptionComponent,
    BoissonComponent,
    SandwichComponent,
    GateauComponent,
    EditProduitComponent,
    MonPanierComponent,
    ChoixEnumComponent,
    CommandeComponent

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
