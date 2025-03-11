import { Component, Input } from '@angular/core';
import { CarSummary } from '../../../../interfaces/ICarSummary';

@Component({
  selector: 'app-total-pay',
  templateUrl: './total-pay.component.html',
  styles: ``
})
export class TotalPayComponent {

  //!Recordemos que recibimos algo es decir los precios
  @Input()
  carSummary: CarSummary = {
    subtotal: 0,
    iva: 0,
    subtotalIva: 0,
    descuento: 0,
    total: 0
  }


  //Creo las variables 
  // subtotal: number = 0;
  // iva: number = this.subtotal * 0.15;
  // subtotalIva: number = this.subtotal + this.iva;
  // descuento: number = this.subtotalIva * 0.10;
  // total: number = this.subtotalIva - this.descuento;



  //Implentaremos 








}
