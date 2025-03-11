import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { SharedModule } from "../shared/shared.module";
import { ShoppingCarClientComponent } from './components/shopping-car-client/shopping-car-client.component';
import { QuantityPipePipe } from '../../pipes/quantity-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TotalPayComponent } from './components/total-pay/total-pay.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavHomeComponent,
    BodyHomeComponent,
    TableProductsComponent,
    FooterHomeComponent,
    ShoppingCarClientComponent,
    QuantityPipePipe,
    TotalPayComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule
  
],
  exports:[
    NavHomeComponent,
    TableProductsComponent,
    BodyHomeComponent,
    FooterHomeComponent
  ]
})
export class DashboardModule { }
