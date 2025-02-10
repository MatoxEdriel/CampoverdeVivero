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



@NgModule({
  declarations: [
    AppComponent,
    NavOptionsComponent,
    FootComponent,
    LoginComponent,
    ContainerLoginComponent,
    TableDeviceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
