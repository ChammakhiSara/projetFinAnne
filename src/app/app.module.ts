import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionAgencesComponent } from './gestion-agences/gestion-agences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AgenceServiceService } from './services/agence-service.service';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { LoginComponent } from './login/login.component';
import { BOMComponent } from './bom/bom.component';
import { StockTotaleComponent } from './stock-totale/stock-totale.component';
import { StockTunisComponent } from './stock-tunis/stock-tunis.component';
import { StockSousseComponent } from './stock-sousse/stock-sousse.component';
import { StockSfaxComponent } from './stock-sfax/stock-sfax.component';
import { BOMService } from './services/bom.service';
import { StockTotaleService } from './services/stock-totale.service';
import { StockTunisService } from './services/stock-tunis.service';
import { StockSfaxService } from './services/stock-sfax.service';
import { StockSousseService } from './services/stock-sousse.service';

@NgModule({
  declarations: [
    AppComponent,
    GestionAgencesComponent,
    NavbarComponent,
    GestionUsersComponent,
    LoginComponent,
    BOMComponent,
    StockTotaleComponent,
    StockTunisComponent,
    StockSousseComponent,
    StockSfaxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AgenceServiceService, UserServiceService, BOMService, StockTotaleService, StockTunisService, StockSfaxService, StockSousseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
