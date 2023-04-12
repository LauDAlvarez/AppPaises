import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Countries } from '../interfaces/paices.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _apiUrl: string = 'https://restcountries.com/v3.1'
  
  constructor( private http: HttpClient ) { }
  
  buscarPais( termino: string): Observable<Countries[]> {
    
    const url = `${ this._apiUrl }/name/${termino}`;
    return this.http.get<Countries[]>( url );
  }
  buscarCapital( termino: string): Observable<Countries[]> {
    
    const url = `${ this._apiUrl }/capital/${termino}`;
    return this.http.get<Countries[]>( url );
  }
  bucarPaisCodigo( id: string ): Observable<Countries[]>{
    const url = `${ this._apiUrl }/alpha/${id}`;
    return this.http.get<Countries[]>( url );
  }
}
