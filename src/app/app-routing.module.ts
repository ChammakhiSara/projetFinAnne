import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { BOMComponent } from './bom/bom.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GestionAgencesComponent } from './gestion-agences/gestion-agences.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoleGuardService } from './role-guard.service';
import { StockSfaxComponent } from './stock-sfax/stock-sfax.component';
import { StockSousseComponent } from './stock-sousse/stock-sousse.component';
import { StockTotaleComponent } from './stock-totale/stock-totale.component';
import { StockTunisComponent } from './stock-tunis/stock-tunis.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: 'gestion-agences',
        component: GestionAgencesComponent, 
        canActivate: [AuthGuardService, RoleGuardService],
        data: { role: 'ADMIN' }
      },
      {
        path: 'gestion-users',
        component: GestionUsersComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: { role: 'ADMIN' }
      },
      {
        path: 'BOM',
        component: BOMComponent, canActivate: [AuthGuardService]
      },
      {
        path: 'stock-totale',
        component: StockTotaleComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: { role: 'ADMIN', role2: "MAGASINIER" }
      },
      {
        path: 'stock-tunis',
        component: StockTunisComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: { role: 'ADMIN', role2: "MAGASINIER" }
      },
      {
        path: 'stock-sfax',
        component: StockSfaxComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: { role: 'ADMIN', role2: "MAGASINIER" , role3:"MAGASINIERSFAX"}
      },
      {
        path: 'stock-sousse',
        component: StockSousseComponent,
        canActivate: [AuthGuardService, RoleGuardService],
        data: { role: 'ADMIN', role2: "MAGASINIER" , role3:"MAGASINIERSOUSSE"}
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
