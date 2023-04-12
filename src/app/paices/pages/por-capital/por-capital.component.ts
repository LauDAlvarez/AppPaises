import { Component } from '@angular/core';
import { Countries } from '../../interfaces/paices.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino: string = '';
  error  : boolean = false;
  paises : Countries[] = [];  

  buscar( termino: string){
    this.error = false;
    console.log(this.termino)
    this.termino = termino;

    this.paisesService.buscarCapital( this.termino )
        .subscribe( (capital) => { 
          console.log(capital)
          this.paises = capital;
        }, (error) => {
          this.error = true
          this.paises = [];
          console.log(error);
        })
  }
  sugerencia( arg: any ){
    this.error = false;
    if(arg){
      this.buscar(arg);
    }
    
    this.paises = [];
  }
  constructor( private paisesService: PaisesService ){}
}
