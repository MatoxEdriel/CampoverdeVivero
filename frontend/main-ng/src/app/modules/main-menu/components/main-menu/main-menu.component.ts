import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styles: ``
})
export class MainMenuComponent {

  //Creamos una lista de routes 


  menuRoutes:any[] = [
    {
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      label: 'Person',
      route: 'person'
    },
    {
      label: 'cars',
      route: 'cars'
    },
    {
      label:'countries',
      route: 'countries'
    }



  ]


}
