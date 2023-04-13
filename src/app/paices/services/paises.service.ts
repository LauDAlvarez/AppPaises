import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Countries } from '../interfaces/paices.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _apiUrl: string = 'https://restcountries.com/v3.1'
  get httpParams(){
    return new HttpParams().set( 'fields', 'name,flags,population,capital,cca2' ) 
  }
  
  constructor( private http: HttpClient ) { }
  
  buscarPais( termino: string): Observable<Countries[]> {
    
    const url = `${ this._apiUrl }/name/${termino}`;
    return this.http.get<Countries[]>( url, {params: this.httpParams} );
  }
  buscarCapital( termino: string): Observable<Countries[]> {
    
    const url = `${ this._apiUrl }/capital/${termino}`;
    return this.http.get<Countries[]>( url, {params: this.httpParams} );
  }
  bucarPaisCodigo( id: string ): Observable<Countries[]>{

    const url = `${ this._apiUrl }/alpha/${id}`;
    return this.http.get<Countries[]>( url );
  }
  buscarRegion( region: string ): Observable<Countries[]>{
    
    const url = `${ this._apiUrl }/region/${region}`;
    return this.http.get<Countries[]>( url, {params: this.httpParams} );
  }
}
