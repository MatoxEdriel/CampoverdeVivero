import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableButtonComponent } from './components/table-button/table-button.component';
import { FootPlaceComponent } from './components/foot-place/foot-place.component';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { FormsModule } from '@angular/forms';
import { CrudButtonComponent } from './components/crud-button/crud-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableButtonComponent,
    FootPlaceComponent,
    PersonTableComponent,
    CrudButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports: [
    TableButtonComponent,
    PersonTableComponent,
    CrudButtonComponent
  ]
})
export class SharedModule { }
