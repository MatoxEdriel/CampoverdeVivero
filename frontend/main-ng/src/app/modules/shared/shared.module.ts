import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableButtonComponent } from './components/table-button/table-button.component';
import { FootPlaceComponent } from './components/foot-place/foot-place.component';



@NgModule({
  declarations: [
    TableButtonComponent,
    FootPlaceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableButtonComponent
  ]
})
export class SharedModule { }
