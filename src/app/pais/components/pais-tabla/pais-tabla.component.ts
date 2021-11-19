
import { Component,  Input } from '@angular/core';
import { Countries } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {


  @Input() paises:Countries[]=[]


  constructor() { }



}
