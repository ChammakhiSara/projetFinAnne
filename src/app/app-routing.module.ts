import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionAgencesComponent } from './gestion-agences/gestion-agences.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'gestion-agences',
    pathMatch: 'full'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
