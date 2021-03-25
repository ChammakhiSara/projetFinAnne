import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
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
    component: NavbarComponent,canActivate:[AuthGuardService],
    children: [
      {
        path:'gestion-agences',
        component: GestionAgencesComponent,canActivate:[AuthGuardService]
      },
      {
        path:'gestion-users',
        component: GestionUsersComponent,canActivate:[AuthGuardService]
      },
      {
        path:'BOM',
        component: BOMComponent,canActivate:[AuthGuardService]
      },
      {
        path:'stock-totale',
        component: StockTotaleComponent,canActivate:[AuthGuardService]
      },
      {
        path:'stock-tunis',
        component: StockTunisComponent,canActivate:[AuthGuardService]
      },
      {
        path:'stock-sfax',
        component: StockSfaxComponent,canActivate:[AuthGuardService]
      },
      {
        path:'stock-sousse',
        component: StockSousseComponent,canActivate:[AuthGuardService]
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
