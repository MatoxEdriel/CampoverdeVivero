import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

import { ContainerLoginComponent } from './modules/container-login/container-login.component';
import { NavOptionsComponent } from './modules/nav-options/nav-options.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: ContainerLoginComponent },
  { path: 'dashboard', component: NavOptionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
