import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryFormReactiveComponent } from './country-form-reactive/country-form-reactive.component';

const routes: Routes = [
  {path:'', component:CountryFormReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PaisesRoutingModule { }
