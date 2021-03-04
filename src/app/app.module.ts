import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionAgencesComponent } from './gestion-agences/gestion-agences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AgenceServiceService } from './services/agence-service.service';
import { UserServiceService } from './services/user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionAgencesComponent,
    NavbarComponent,
    GestionUsersComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AgenceServiceService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
