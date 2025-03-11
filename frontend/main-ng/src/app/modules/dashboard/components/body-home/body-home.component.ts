import { Component, ViewChild } from '@angular/core';
import { TableProductsComponent } from '../table-products/table-products.component';
import { ShoppingCarClientComponent } from '../shopping-car-client/shopping-car-client.component';
import { dataProduct } from '../../../../data/product.data';
import { IProductDetail } from '../../../../interfaces/IProductDetail';
import { TotalPayComponent } from '../total-pay/total-pay.component';
import { CarSummary } from '../../../../interfaces/ICarSummary';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styles: ``
})
export class BodyHomeComponent {

  //Usare esto para comunicarme con los elementos de los componentes hijos 
  //En este ejemplo quiero interactuar con las 2 tablas
  //pondremos los nombres de los componentes  
  @ViewChild(TableProductsComponent) productInList!: TableProductsComponent;
  @ViewChild(ShoppingCarClientComponent) productPicked!: ShoppingCarClientComponent;

  @ViewChild(TableProductsComponent) productAdded!: TableProductsComponent;
  //?Aqui tengo acceso a dicho componente
  @ViewChild(TotalPayComponent) totalPay!: TotalPayComponent;
  //!Aqui haremos el metodo para agregar los producto porque ya podemos interactuar 

  //!POr esta vezx usaremos este tipo de variables
  discounts: number = 0.10;
  //?Se crea un nuevo interfaz !
  //!Investigar porq ue se debe crear dos 
  carSummaryDefault: CarSummary = {
    subtotal: 0,
    iva: 0,
    subtotalIva: 0,
    descuento: 0,
    total: 0,
  }

  // aggNewProductToList(){
  //   let newProductName = this.productInList.newProduct;
  //   let newCategoryProduct = this.productInList.newCategory;
  //   let newProviderProduct =this.productInList.newProvider;
  //   let newStockProduct = this.productInList.newStock;
  //   let newPriceProduct = this.productInList.newPrice;  
  //   let newIdProduct = this.productInList.lstProduct.length + 1;
  //   //Primero verificaremos si existe el nuevo producto
  //   if(this.productInList.lstProduct.length > 0){
  //     //Aqui confirmo que si hay productos en la lista 
  //     //luego verificaremos si existe el producto que ingresaremos 
  //     let newProductValidation = this.productInList.lstProduct.find(productV => productV.id == newIdProduct);
  //     if(newProductValidation){
  //       //Si sale verdadero es porque existe el producto
  //       //aqui aumentaremos el stock
  //       //el map recorrera el arreglo y si encuentran semejanza en los id se le agrega
  //       this.productInList.lstProduct.map(productInList => {
  //         if(productInList.id == newIdProduct){
  //           productInList.stock ++;
  //         }
  //       })
  //     }
  //   }
  //   //Pero si no encuentran ? 
  //   else{
  //     let newProduct:IProductDetail = {
  //       id: newIdProduct,
  //       product: newProductName,
  //       category: newCategoryProduct,
  //       price: newPriceProduct,
  //       provider: newProviderProduct,
  //       stock: newStockProduct
  //     }
  //     this.productInList.lstProduct.push(newProduct);


  //   }



  // }

  addProduct(product: IProductDetail) {
    //?Enm este ejemplo nosotros guardamos cada dato en el producto ingresado
    let productSelected = product.product;
    let productCategorySelected = product.category;
    let productPriceSelected = product.price;
    let produtIdSelected = product.id;



    let productInStock = this.productInList.lstProduct.find(p => p.id === produtIdSelected);
    if (productInStock && productInStock.stock > 0) {
      productInStock.stock--; // Resta 1 al stock solo si hay unidades disponibles
    } else {
      alert("No hay suficiente stock disponible.");
      return; // Salimos del método si no hay stock suficiente
    }



    //Aqui mediante la variable viewChild accediste a la lista de producto seleccionado
    if (this.productPicked.lstProductSelected.length > 0) {
      let productValidation = this.productPicked.lstProductSelected.find(productInCar => productInCar.id == produtIdSelected)
      if (productValidation) {
        this.productPicked.lstProductSelected.map(productInCar => {
          if (productInCar.id == productValidation.id) {
            productInCar.stock++;

          }

        })
      } else {
        let newProduct: IProductDetail = {
          id: produtIdSelected,
          product: productSelected,
          category: productCategorySelected,
          price: productPriceSelected,
          provider: '',
          stock: 1
        }
        this.productPicked.lstProductSelected.push(newProduct);

      }



    } else {
      let newProduct: IProductDetail = {
        id: produtIdSelected,
        product: productSelected,
        category: productCategorySelected,
        provider: '',
        price: productPriceSelected,
        stock: 1
      }
      //Aqui accedes a la lista de producto seleccionado mediante la variable que 
      //se creo con viewChild 
      this.productPicked.lstProductSelected.push(newProduct);
    }

    this.carSummaryDefault = this.calculateTotalPrice(this.productPicked.lstProductSelected);



  }

  quiteProductFromSelected(product: IProductDetail) {
    let productIdQuit = product.id;
    let productQuantity = product.stock;
    //!POR SI EL MAN QUITA UN PRODUCTO SE SUMA AL STOCK NORMAL 
    this.productInList.lstProduct.map(productQuit => {
      if (productQuit.id == productIdQuit) {
        productQuit.stock++;
      }
    })

    this.productPicked.lstProductSelected.map(productPicked => {
      if (productPicked.id == productIdQuit) {
        productPicked.stock--;
      }
    });

    let productQuiteValidation = this.productPicked.lstProductSelected.find(productSelectedQuit => productSelectedQuit.id === productIdQuit);
    if (productQuiteValidation!.stock == 0) {
      let indexQuitProduct = this.productPicked.lstProductSelected.indexOf(productQuiteValidation!);
      this.productPicked.lstProductSelected.splice(indexQuitProduct, 1);
    }


    //Aqui uso la funcion usando como base el interface default 
   



  }



  //Debo usar desde  deboe nviar solo los precios 
  calculateTotalPrice(lstProductSelected: IProductDetail[]): CarSummary {
    {
      let subtotal = 0;
      let iva = 0;
      let subtotalIva = 0;
      let descuento = 0;
      let total = 0;
      //Primero veremos si hay productos o no para calcular 
      if (lstProductSelected.length > 0) {
        lstProductSelected.forEach(product => {
          //Con esto multiplcaremos el stock por el precio 
          subtotal += product.price * product.stock;
        });
      }
      iva = subtotal * 0.15;
      subtotalIva = subtotal + iva;
      descuento = subtotalIva * this.discounts;
      total = subtotalIva - descuento;
      //Como es una promesa lo que ando haciedno es
      return {
        subtotal,
        iva,
        subtotalIva,
        descuento,
        total
      };
    }
  }
}
