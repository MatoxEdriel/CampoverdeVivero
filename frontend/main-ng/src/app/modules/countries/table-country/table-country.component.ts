import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, output, Output } from '@angular/core';
import { ICountry } from '../../../interfaces/ICountry';
import { CountryService } from '../../../services/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styles: ``
})
export class TableCountryComponent implements AfterViewInit , OnDestroy{


  private countryUpdatedSubscription! : Subscription; 
  

  @Output()
  loadTableEvent = new EventEmitter();

  idUpdated: string = '';
  nameUpdated: string = '';
  acronimoUpdated: string = '';
  countryCodeUpdate: string = '';
  continentUpdated: string = '';


  countryIdToDelete: string = '';



  countries: ICountry[] = [];

  statusData: string = 'init'; //init load success 

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

  //!Deetector para cambios 
  constructor(private readonly countryService: CountryService, 
    private readonly changeDetector: ChangeDetectorRef) { }
  ngOnDestroy(): void {
      if(this.countryUpdatedSubscription){

        this.countryUpdatedSubscription.unsubscribe();
      }



  }
  ngAfterViewInit(): void {
    this.loadTable();

    this.countryUpdatedSubscription = this.countryService.countryUpdate$.subscribe(()=>{

      this.loadTable();
    })


  }

  

  dataToDelete(countryId: string) {

    this.countryIdToDelete = countryId

  }


  deleteCountry() {
    this.countryService.deleteCountry(this.countryIdToDelete).subscribe({

      next: (value) => {
        alert(`Pais eliminado correctamente   ${this.countryIdToDelete}`);


      },
      error: (error) => {
        alert("error al borrar")
      },
      //cargara otra la tabla
      complete: () => {

        this.loadTable();
      }



    })


  }

  //El objetivo de etener esto es tener carga perezosa en la carga de de nuevo objetos 
  selectCountryUpdate(country: ICountry) {
    this.idUpdated = country._id!;
    this.nameUpdated = country.countryName;
    this.acronimoUpdated = country.acronimo;
    this.countryCodeUpdate = country.codeCountry;
    this.continentUpdated = country.continent;
  }

  updateCountry() {
    let countryUpdate: ICountry = {
      countryName: this.nameUpdated,
      acronimo: this.acronimoUpdated,
      codeCountry: this.countryCodeUpdate,
      continent: this.continentUpdated
    }

    this.countryService.updateCountry(countryUpdate, this.idUpdated).subscribe({
      next: (value) => {
        let valueResponse: any = value;
        alert(`Valor Actualizado por`);


      },
      error: (error) => {


      },
      complete: () => {
        this.loadTable()

      }




    })


  }
  //Logica de evento de la tabla 




}
