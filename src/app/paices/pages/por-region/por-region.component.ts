import { Component } from '@angular/core';
import { retry, tap } from 'rxjs'
import { Countries } from '../../interfaces/paices.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {
  paises: Countries[] = []
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = ''

  constructor( private paisesService:  PaisesService){}
  
  getClassActive( region: string){

    return ( region == this.regionActiva )? 
    'btn btn-primary m5'
    :'btn btn-outline-primary m5';
  }
  activarRegion( region: string){

    this.regionActiva = region;
  }
  bucarRegion( region: string ){
    
    this.regionActiva = region
    this.paises = []
    this.paisesService.buscarRegion( region )
    .pipe( tap(console.log) )
    .subscribe( ( paises ) => { 
          console.log(paises)
          this.paises = paises;
        })
  }
} 