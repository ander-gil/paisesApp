import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'
import { tap } from 'rxjs/operators';
import { Countries } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string= 'https://restcountries.eu/rest/v2';

  constructor(private http:HttpClient) { }

  get httpParams(){
    return  new HttpParams().set('fields', 'name;population;capital;flag;alpha2Code')
  }

  buscarPais(termino:string):Observable<Countries[]>{

    const url=`${this.apiUrl}/name/${termino}`
    return this.http.get<Countries[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino:string):Observable<Countries[]>{

    const url= `${this.apiUrl}/capital/${termino}`
    return this.http.get<Countries[]>(url, {params: this.httpParams});
  }

  getporCodigoPais(id:string):Observable<Countries>{

    const url= `${this.apiUrl}/alpha/${id}`
    return this.http.get<Countries>(url);
  }

  getporRegion(region:string):Observable<Countries[]>{
    const url=`${this.apiUrl}/region/${region}`

    return this.http.get<Countries[]>(url, {params: this.httpParams})
    .pipe(
      tap(  console.log  )
    )
  }



}
