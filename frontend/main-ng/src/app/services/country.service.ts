import { Injectable } from '@angular/core';
import { HttpsServiceService } from './https-service.service';
import { ICountry } from '../interfaces/ICountry';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {



  private countryUpdateSource = new Subject<void>();

  countryUpdate$ =  this.countryUpdateSource.asObservable();


  notifyCountryUpdated(){
    this.countryUpdateSource.next();

  }




  uriCountry: string = environment.URI_COUNTRY;

  constructor(private httpServices: HttpsServiceService) { }



  findById(id: string) {





  }


  findAll() {
    return this.httpServices.getRequest(this.uriCountry);


  }
  saveCountry(country: ICountry): Observable<any> {
    return this.httpServices.postRequest(country, this.uriCountry);
  }

  deleteCountry(id: string): Observable<any> {
    return this.httpServices.deleteRequest(id, this.uriCountry)
  }



  updateCountry(country: ICountry, id: string) {


    return this.httpServices.updateRequest(id, this.uriCountry, country)


  }








}
