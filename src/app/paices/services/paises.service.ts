import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { Countries } from '../interfaces/paices.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _apiUrl  : string     = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital  : {
        term: '',
        countries: []
    },
    byCountries: {
        term: '',
        countries: []
    },
    byRegion   : {
        region:'',
        countries: []
    }
  };

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,flags,population,capital,cca2' ) 
  }
  
  constructor( private http: HttpClient ) { 
    this.loadCache();
  }

  saveCachE(){
    localStorage.setItem('cacheStorage', JSON.stringify( this.cacheStore ))
  }  

  loadCache(){
    if( !localStorage.getItem('cacheStorage'))return;
  
    this.cacheStore = JSON.parse( localStorage.getItem('cacheStorage')! )
  }


  buscarPais( termino: string): Observable<Countries[]> {
    
    const url = `${ this._apiUrl }/name/${termino}`;
    return this.http.get<Countries[]>( url, {params: this.httpParams} )
                    .pipe(
                      tap( countries => this.cacheStore.byCountries = {term: termino, countries } ),
                      tap( () => this.saveCachE() )
                    );
  }
  buscarCapital( termino: string): Observable<Countries[]> {
    
    const url = `${ this._apiUrl }/capital/${termino}`;
    return this.http.get<Countries[]>( url, {params: this.httpParams} )
                    .pipe(
                      tap( countries => this.cacheStore.byCapital = { term: termino, countries } ),
                      tap( () => this.saveCachE() )
                    );
  }
  bucarPaisCodigo( id: string ): Observable<Countries[]>{

    const url = `${ this._apiUrl }/alpha/${id}`;
    return this.http.get<Countries[]>( url );
  }
  buscarRegion( region: Region ): Observable<Countries[]>{
    
    const url = `${ this._apiUrl }/region/${region}`;
    return this.http.get<Countries[]>( url, {params: this.httpParams} )
                    .pipe(
                      tap( countries => this.cacheStore.byRegion = { region, countries } ),
                      tap( () => this.saveCachE() )
                    );
  }
}
