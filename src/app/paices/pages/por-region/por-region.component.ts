import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap } from 'rxjs'
import { Countries } from '../../interfaces/paices.interface';
import { PaisesService } from '../../services/paises.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent implements OnInit,OnDestroy {
  paises      : Countries[] = []
  regiones    : Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = ''
  loading     : boolean = false; 
  initialValue: Region = '';

  constructor( private paisesService:  PaisesService){}
  
  getClassActive( region: string){

    return ( region == this.regionActiva )? 
    'btn btn-primary m5'
    :'btn btn-outline-primary m5';
  }
  activarRegion( region: string = this.initialValue){

    this.regionActiva = region;
  }
  bucarRegion( region: Region ){
    this.loading = true;
    this.regionActiva = region
    this.paises = []
    this.paisesService.buscarRegion( region )
    .pipe( tap(console.log) )
    .subscribe( ( paises ) => { 
          console.log(paises)
          this.paises = paises;
          this.loading = false;
        })
  }
  ngOnDestroy(): void {
    this.initialValue = '';
  }

  ngOnInit(): void {
    this.paises = this.paisesService.cacheStore.byRegion.countries;
    this.regionActiva = this.paisesService.cacheStore.byRegion.region;
  }
} 