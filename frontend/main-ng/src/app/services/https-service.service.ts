import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsServiceService {
  urlBase = environment.URL_BASE;

  constructor(private readonly httpCliente: HttpClient) { }


  getRequest(uri: string) {
    let url = `${this.urlBase}${uri}`;
    return this.httpCliente.get(url);
  }



  postRequest(body: any, uri: string): Observable<any> {
    let url = `${this.urlBase}${uri}`;

    return this.httpCliente.post(url, body);


  }

  deleteRequest(id: string, uri: string): Observable<any> {
    let url = `${this.urlBase}${uri}${id}`;
    return this.httpCliente.delete(url)

  }

  updateRequest(id: string, uri: string, body:any): Observable<any> {
    let url = `${this.urlBase}${uri}${id}`;
    return this.httpCliente.put(url, body)
  }



}




