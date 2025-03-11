import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfilesComponent } from './profiles/profiles.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    ProfilesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
