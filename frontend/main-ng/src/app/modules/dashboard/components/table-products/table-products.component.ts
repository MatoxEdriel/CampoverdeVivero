import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDevice } from '../../../../interfaces/IDevice';
import { deviceDS } from '../../../../data/device.data';
import { IProductDetail } from '../../../../interfaces/IProductDetail';
import { dataProduct } from '../../../../data/product.data';


@Component({
  selector: 'app-products-device',
  templateUrl: './table-products.component.html',
  styles: ``
})
export class TableProductsComponent {

  // lstDevice:  IDevice[] = deviceDS;





  lstProduct: IProductDetail[] = dataProduct;



  @Output() aggProductToCarEvent = new EventEmitter();

  //Aqui envio el objeto
  @Output() addNewProductEvent = new EventEmitter();

  //Recibes los datos desde el modal
  // @Input()
  // productAdded!:IProductDetail;

  // productAdded:IProductDetail = {
  //   id:0,
  //   product: '',
  //   category:'',
  //   provider:'',
  //   price: 0,
  //   stock: 0,
  // };

  newProduct: string = '';
  newCategory: string = '';
  newProvider: string = '';
  newPrice: number = 0;
  newStock: number = 0;





  addProductToCar(product: IProductDetail) {
    this.aggProductToCarEvent.emit(product);
  }


  //aqui esta el evento ahora tengo que guardarlo
  clickAddNewProduct() {
    this.addNewProductEvent.emit();
  }

  newDeviceName: string = '';
  newDeviceQuantity: number = 0;
  newDevicePrice: number = 0;


  addNewProduct() {
    // ordernar de manera descendente por id
    let newDevice: IProductDetail = {
    //       let newProductName = this.productInList.newProduct;
    // let newCategoryProduct = this.productInList.newCategory;
    // let newProviderProduct =this.productInList.newProvider;
    // let newStockProduct = this.productInList.newStock;
    // let newPriceProduct = this.productInList.newPrice;  
    // let newIdProduct = this.productInList.lstProduct.length + 1;
      id: 0,
      product: this.newProduct,
      category: this.newCategory,
      provider: this.newProvider,
      price: this.newPrice, 
      stock: this.newStock

    }
    this.lstProduct.push(newDevice);
  }









}

