import { Component, Input } from '@angular/core';
import { Countries } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {


  termino:string = "";
  hayError:boolean = false;
  paises:Countries[]=[];



    buscar(termino:string){

      this.hayError=false;
      this.termino=termino;
      this.paisServicio.buscarCapital(this.termino)
      .subscribe(paises=>{
        console.log(paises)
        this.paises = paises;
      },(err)=>{
        console.log('error');
        this.hayError=true;
      });
    }

    sugerencias(termino:string){
      this.hayError=false;
    }

  constructor(private paisServicio:PaisService) { }




}
