import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent  implements OnInit{
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string= '';
  termino: string = '';
  debouncer: Subject<string> = new Subject();


  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500))
    .subscribe( valor =>{ 
      this.onChange.emit(valor)
      console.log(valor)
    });

  }

  buscar(){
    this.onEnter.emit( this.termino )
  }
  teclaPresionada(){
    this.debouncer.next( this.termino );
  }

}
