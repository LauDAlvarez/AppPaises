import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent  implements OnInit, OnDestroy{
  public  termino              : string          = '';
  private debouncer            : Subject<string> = new Subject();
  private debouncerSuscription ?: Subscription;
  
  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output() 
  onChange: EventEmitter<string> = new EventEmitter();
  
  @Input() 
  initialValue: string= '';
  
  ngOnInit(): void {
    this.termino = this.initialValue
    this.debouncerSuscription = this.debouncer
    .pipe(debounceTime(500))
    .subscribe( valor =>{ 
      this.onChange.emit(valor)
    });
  }
  
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  buscar(){
    this.onEnter.emit( this.termino )
  }
  teclaPresionada(){
    this.debouncer.next( this.termino );
  }

}
