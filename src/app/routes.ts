import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ViennoiserieComponent} from './viennoiserie/viennoiserie.component';
import {PanierComponent} from './panier/panier.component';

export const routes: Routes = [
   {path: 'home', component: HomeComponent},
//   {path: 'sandwich', component: SandwichComponent},
   {path: 'viennoiserie', component: ViennoiserieComponent},
//   {path: 'gateau', component: GateauComponent},
//   {path: 'boisson', component: BoissonComponent},
//   {path: 'devis/:id', component: DevisComponent},
//   {path: 'commande/:id', component: CommandeComponent},
   {path: 'panier/:id', component: PanierComponent},
//   {path: 'gestionClient', component: GestionClientComponent},
   {path: 'login', component: LoginComponent},
   {path: 'inscription', component: InscriptionComponent},

//   {path: 'parametreClient/:id', component: ParametreClientComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'},
//   {path: 'error/login', component: ErreurAuthentificationComponent}
 ];
