import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder='';
  termino='';
  @Output() onEnter=new EventEmitter<any>();
  @Output() onDebounce=new EventEmitter<any>();

  debounce: Subject<string>=new Subject();

  enviarTermino(){
    this.onEnter.emit(this.termino);
  }

  constructor(){}

  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor=>{
        this.onDebounce.emit(valor);
      })
  }

  teclaPresionada(){
   
    this.debounce.next(this.termino);

  }
}
