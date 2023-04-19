import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Countries } from '../../interfaces/paices.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent implements OnInit,OnDestroy {
  termino     : string      = '';
  initialValue: string      = '';
  error       : boolean     = false;
  loading     : boolean     = false;
  paises      : Countries[] = [];  

  buscar( termino: string){
    this.loading = true;
    this.error = false;
    this.termino = termino;

    this.paisesService.buscarPais( this.termino )
        .subscribe( (paises) => { 
          this.paises = paises;
          this.loading = false;
        }, (error) => {
          this.error = true
          this.paises = [];
        })
  }

  sugerencia( arg: any ){
    this.loading = true;
    this.error = false;
    if(arg){
      this.buscar(arg);
    }
    
    this.paises = [];
  }

  constructor( private paisesService: PaisesService ){}
  
  ngOnDestroy(): void {
    this.termino = "";
    this.initialValue = "";
  }

  ngOnInit(): void {
    this.paises = this.paisesService.cacheStore.byCountries.countries;
    this.initialValue = this.paisesService.cacheStore.byCountries.term;
  }
}
