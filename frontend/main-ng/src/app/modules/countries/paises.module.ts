import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { CountryFormReactiveComponent } from './country-form-reactive/country-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableCountryComponent } from './table-country/table-country.component';
import { provideHttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CountryFormReactiveComponent,
    TableCountryComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[
    CountryFormReactiveComponent
  ]

})
export class PaisesModule { }
