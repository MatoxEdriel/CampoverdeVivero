import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOptionsComponent } from './modules/nav-options/nav-options.component';
import { FootComponent } from './modules/foot/foot.component';
import { LoginComponent } from './modules/login/login.component';
import { ContainerLoginComponent } from './modules/container-login/container-login.component';

import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavOptionsComponent,
    FootComponent,
    LoginComponent,
    ContainerLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
