import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

import { ContainerLoginComponent } from './modules/container-login/container-login.component';
import { NavOptionsComponent } from './modules/nav-options/nav-options.component';
import { NavHomeComponent } from './modules/dashboard/components/nav-home/nav-home.component';
import { MainMenuComponent } from './modules/main-menu/components/main-menu/main-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: ContainerLoginComponent },
  // { path: 'dashboard', component: NavHomeComponent }
  {
    path: 'MainVivero',
    component: MainMenuComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'person',
        loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule)
      },
      {
        path:'cars',
        loadChildren: () => import('./modules/cars/cars.module').then(m=>m.CarsModule)

      },
      {
        path:'countries',
        loadChildren:() =>import('./modules/countries/paises.module').then(m=>m.PaisesModule)

      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
