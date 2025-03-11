import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDevice } from '../../../../interfaces/IDevice';
import { IProductDetail } from '../../../../interfaces/IProductDetail';

@Component({
  selector: 'app-shopping-car-client',
  templateUrl: './shopping-car-client.component.html',
  styleUrl: './shopping-car-client.component.css'
})
export class ShoppingCarClientComponent {

  lstProductSelected: IProductDetail[] = [];

  //!Aqui tu recibes los datos del componente padre LISTA DE PRODUCTO 
  //!Aqui haces lo que recibe 
  @Input()
  productSelected!: IProductDetail;

  @Output()
  quitProductEvent = new EventEmitter<IProductDetail>();

  //Aqui recibo y envio los precios
  @Output()
  totalPriceEvent = new EventEmitter<number>();


  //Aqui haremos que se multiplique los precios


  // updateTotalPrice(product: IProductDetail) {
  //   let newPrice = product.price * product.stock;
  //   return newPrice;
  // }

  quitProduct(product:IProductDetail) {
    this.quitProductEvent.emit(product);
  }



}
