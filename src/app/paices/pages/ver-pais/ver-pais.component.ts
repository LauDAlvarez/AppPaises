import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';

import { PaisesService } from '../../services/paises.service';
import { Countries } from '../../interfaces/paices.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit{
  pais!: Countries ;
  loading : boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisesService: PaisesService,
  ){}
  
  ngOnInit(): void {
    
    this.activateRoute.params
        .pipe(  switchMap( ({id}) => this.paisesService.bucarPaisCodigo(id)),
                tap( console.log),
                delay(1000))
        .subscribe( (pais) => {
          this.pais = pais[0];
        })

    // this.activateRoute.params
    //     .subscribe( ({id}) => {
    //       this.paisesService.bucarPaisCodigo(id)
    //           .subscribe( pais => {
    //             console.log(pais)
    //             this.pais = pais[0]
    //           });
    //     });
  }
}
