import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TemplateFormCarsComponent } from './template-form-cars/template-form-cars.component';
import { ReactiveFormCarsComponent } from './reactive-form-cars/reactive-form-cars.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MaintenanceComponent,
    TemplateFormCarsComponent,
    ReactiveFormCarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
