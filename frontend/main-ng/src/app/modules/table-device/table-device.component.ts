import { Component, Input } from '@angular/core';
import { IDevice } from '../../interfaces/IDevice';
import { deviceDS } from '../../data/device.data';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styles: ``
})
export class TableDeviceComponent {

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
