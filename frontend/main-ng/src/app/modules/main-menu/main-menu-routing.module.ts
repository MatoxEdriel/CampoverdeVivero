import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {
    path: 'MainVivero',
    children:[
      {
        path:'person',
        loadChildren: ()=>import ('../shared/shared.module').then(m=>m.SharedModule)
      },
      {
        path:'dashboard',
        loadChildren: ()=>import ('../dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'countries',
        loadChildren: ()=> import('../countries/paises.module').then(m => m.PaisesModule)
      }


    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
