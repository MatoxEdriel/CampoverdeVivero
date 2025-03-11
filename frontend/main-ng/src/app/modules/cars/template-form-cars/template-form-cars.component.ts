import { Component } from '@angular/core';
import { ICar } from '../../../interfaces/ICar';
import { __values } from 'tslib';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-cars',
  templateUrl: './template-form-cars.component.html',
  styles: ``
})
export class TemplateFormCarsComponent {


  //Terminar el ejemplo 

  car: ICar = {
    brand: '',
    model: '',
    year: undefined,
    type: ''
  }

  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log(this.car)
  }

  //!Aqui probaremos otra forma de guardar datos

  saveCarForm(carForm: NgForm){
    if(carForm.valid){

      alert("me esta validacion me exita ")
      console.log(this.car)
    }
    else{
      alert("esta validacion no me exita ")
    }

  }






}
