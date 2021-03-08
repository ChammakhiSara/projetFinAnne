import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BOMComponent } from './bom/bom.component';
import { GestionAgencesComponent } from './gestion-agences/gestion-agences.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StockSfaxComponent } from './stock-sfax/stock-sfax.component';
import { StockSousseComponent } from './stock-sousse/stock-sousse.component';
import { StockTotaleComponent } from './stock-totale/stock-totale.component';
import { StockTunisComponent } from './stock-tunis/stock-tunis.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'navbar',
    component: NavbarComponent
  },
  {
    path:'gestion-agences',
    component: GestionAgencesComponent
  },
  {
    path:'gestion-users',
    component: GestionUsersComponent
  },
  {
    path:'BOM',
    component: BOMComponent
  },
  {
    path:'stock-totale',
    component: StockTotaleComponent
  },
  {
    path:'stock-tunis',
    component: StockTunisComponent
  },
  {
    path:'stock-sfax',
    component: StockSfaxComponent
  },
  {
    path:'stock-sousse',
    component: StockSousseComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
