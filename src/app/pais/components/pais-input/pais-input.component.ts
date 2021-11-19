import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {


  @Output() onEnter   :EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounse:EventEmitter<string> = new EventEmitter<string>();

  @Input() place:string = ""

  termino:string='';


  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebounse.emit(valor);
    })
  }

  debouncer:Subject<string> = new Subject;

    buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
      this.debouncer.next(this.termino)
  }

}
