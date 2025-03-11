import { ChangeDetectorRef, Component, EventEmitter, Inject, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { json } from 'express';
import { ICountry } from '../../../interfaces/ICountry';
import { CountryService } from '../../../services/country.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-country-form-reactive',
  templateUrl: './country-form-reactive.component.html',
  styles: ``
})
export class CountryFormReactiveComponent implements OnInit {









  constructor(
    private readonly formBuilderReactive: FormBuilder,
    private readonly countryService: CountryService,
    private readonly changeDetector: ChangeDetectorRef
  ) { }

  @Input()
  process: string = ''; //create 

  @Output()
  loadTableEvent = new EventEmitter();


  formCountryReactive!: FormGroup;

  continents: string[] = ['Africa', 'Sudamerica', 'NorteAmerica', 'Europa', 'Antartida'];

  countries: ICountry[] = [];

  statusData: string = 'init'


  loadTable() {
    this.countryService.findAll().subscribe({
      next: (value) => {
        let countriesGenerate: ICountry[] = value as ICountry[];
        this.countries = []
        if (countriesGenerate.length > 0) {
          this.statusData = 'success';
          this.countries.push(...countriesGenerate);
        }
        else {
          this.statusData = 'empty'
        }
        this.changeDetector.detectChanges();


      },
      error: (error) => {


      },
      //Cuando termina el proceso de observale
      //por ejemplo cuando termine su ejecucuo
      //!Se ejectura una SOLA VEZ cuando termina CORRECTAMENTE
      complete: () => {


      }



    })


  }


  ngOnInit(): void {

    this.formCountryReactive = this.initForm();

  }


  initForm(): FormGroup {
    return this.formBuilderReactive.group(
      {
        nombrePais: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        acronimo: ['', [Validators.pattern('[A-Z]*$'), Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
        codeCountry: ['', [Validators.pattern('[0-9]*$'), Validators.minLength(4), Validators.max(2025)]],
        continent: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]]
      }
    )



  }









  //Create 
  saveCountriesReactiveForm() {

    let newCountry: ICountry = {
      countryName: this.formCountryReactive.get('nombrePais')?.value,
      acronimo: this.formCountryReactive.get('acronimo')?.value,
      codeCountry: this.formCountryReactive.get('codeCountry')?.value,
      continent: this.formCountryReactive.get('continent')?.value
    }

    //Enciar informacion 

    //Aqui llamas los servicios 
    this.countryService.saveCountry(newCountry).subscribe({
      next: (value) => {
        alert("ciudad creada con exito ");
        // this.loadTableEvent.emit();
        this.countryService.notifyCountryUpdated();

      },
      error: (error) => {

        alert('error al guardar');
      },
      //Es cuando el proceso de termine se hace dicho evento 
      complete: () => {
        console.log("proceso de crecion exitoso ")
        this.loadTable();


      }




    })







    this.formCountryReactive.reset();




  }



}
