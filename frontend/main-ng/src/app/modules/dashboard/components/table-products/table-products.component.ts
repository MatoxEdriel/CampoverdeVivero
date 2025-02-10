import { Component, Input } from '@angular/core';
import { IDevice } from '../../../../interfaces/IDevice';
import { deviceDS } from '../../../../data/device.data';


@Component({
  selector: 'app-products-device',
  templateUrl: './table-products.component.html',
  styles: ``
})
export class TableProductsComponent {

  lstDevice:  IDevice[] = deviceDS;


  //  @Input()
  //   dataPerson: IPerson = {
  //     id: 0,
  //     firstname: '',
  //     lastname: '',
  //     fecha_nacimiento: '',
  //     genre: '',
  //     phone: '',
  //     ciudad: '',
  //     nivel_estudios: ''
  //   }


  //Inicializamos los valores que se pasaran ? 
  






}

