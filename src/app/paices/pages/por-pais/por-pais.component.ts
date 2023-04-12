import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Countries } from '../../interfaces/paices.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  error  : boolean = false;
  paises : Countries[] = [];  

  buscar( termino: string){
    this.error = false;
    console.log(this.termino)
    this.termino = termino;

    this.paisesService.buscarPais( this.termino )
        .subscribe( (paises) => { 
          console.log(paises)
          this.paises = paises;
        }, (error) => {
          this.error = true
          this.paises = [];
          console.log(error);
        })
  }
  sugerencia( arg: any ){
    this.buscar(arg);
  }
  constructor( private paisesService: PaisesService ){}
}
