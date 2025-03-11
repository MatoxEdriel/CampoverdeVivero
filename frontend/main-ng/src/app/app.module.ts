import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootComponent } from './modules/foot/foot.component';
import { LoginComponent } from './modules/login/login.component';
import { ContainerLoginComponent } from './modules/container-login/container-login.component';

import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TableDeviceComponent } from './modules/table-device/table-device.component';
import { NavOptionsComponent } from './modules/nav-options/nav-options.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NavHomeComponent } from './modules/dashboard/components/nav-home/nav-home.component';
import { MainMenuComponent } from './modules/main-menu/components/main-menu/main-menu.component';
import { MainMenuModule } from './modules/main-menu/main-menu.module';
import { RouterModule } from '@angular/router';
import { MainMenuRoutingModule } from './modules/main-menu/main-menu-routing.module';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { HttpsServiceService } from './services/https-service.service';
import { CountryService } from './services/country.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PaisesModule } from './modules/countries/paises.module';




@NgModule({
  declarations: [
    AppComponent,
    NavOptionsComponent,
    FootComponent,
    LoginComponent,
    ContainerLoginComponent,
    TableDeviceComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    MainMenuModule,
    RouterModule,
    MainMenuRoutingModule,
    DashboardRoutingModule,
    FormsModule
  ], 
  providers: [HttpsServiceService, CountryService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
