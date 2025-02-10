import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavHomeComponent,
    BodyHomeComponent,
    TableProductsComponent,
    FooterHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    NavHomeComponent,
    TableProductsComponent,
    BodyHomeComponent,
    FooterHomeComponent
  ]
})
export class DashboardModule { }
