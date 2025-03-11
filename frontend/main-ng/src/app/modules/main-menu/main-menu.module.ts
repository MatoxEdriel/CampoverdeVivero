import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from "../dashboard/dashboard.module";


@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardModule
],
  exports:[
    MainMenuComponent
  ]
})
export class MainMenuModule { }
