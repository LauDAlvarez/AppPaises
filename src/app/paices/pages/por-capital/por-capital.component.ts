import { Component, OnDestroy, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/paices.interface';
import { PaisesService } from '../../services/paises.service';
import { delay } from 'rxjs';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent implements OnInit,OnDestroy {
  initialValue: string = '';
  termino: string = '';
  error  : boolean = false;
  loading : boolean = false;
  paises : Countries[] = [];  

  buscar( termino: string){
    this.loading = true;
    this.error = false;
    this.termino = termino;
    this.paisesService.buscarCapital( this.termino )
        .pipe( delay(1000) )
        .subscribe((capital) => { 
          this.paises = capital;
          this.loading = false;
        }, (error) => {
          this.error = true
          this.paises = [];
        })
  }
  sugerencia( arg: any ){
    this.loading = true
    this.error = false;
    if(arg){
      this.buscar(arg);
    }
    this.paises = [];
  }
  constructor( private paisesService: PaisesService ){}

  ngOnDestroy(): void {
    this.initialValue =''
  }

  ngOnInit(): void {
    this.paises = this.paisesService.cacheStore.byCapital.countries;
    this.initialValue = this.paisesService.cacheStore.byCapital.term;
  }
}
