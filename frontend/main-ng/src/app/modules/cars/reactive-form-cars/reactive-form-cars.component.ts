import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-cars',
  templateUrl: './reactive-form-cars.component.html',
  styles: ``
})
export class ReactiveFormCarsComponent implements OnInit {


  //Aqui debo hacer la inyeccion de dependencia de Builder
  constructor(
    private readonly formBuilderReactive: FormBuilder
  ) { }


  //!Los datos y las validaciones de hacen en el componente typescript 
  //?Usas esta variable como enlace de datos 
  formCarReactive!: FormGroup;

  ngOnInit(): void {
    //? Aqui inicializas los datos porque debe cargarse primero 
    this.formCarReactive = this.initForm();


  }

  initForm(): FormGroup {



    return this.formBuilderReactive.group(
      {
        brand: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        model: ['', [Validators.pattern('[A-Z]*$'), Validators.required, Validators.minLength(8)]],
        year: [2000, [Validators.pattern('[0-9]*$'), Validators.minLength(4), Validators.max(2025)]],
        type: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]]
      }
    )



  }




  saveCarReactiveForm() {
    console.log(JSON.stringify(this.formCarReactive.value))



  }



}
