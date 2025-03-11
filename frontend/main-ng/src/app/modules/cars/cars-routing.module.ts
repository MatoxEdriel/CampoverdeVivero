import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from '../main-menu/components/main-menu/main-menu.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {path:'', component: MaintenanceComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
