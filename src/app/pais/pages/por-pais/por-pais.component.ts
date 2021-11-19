
import { Component, Input} from '@angular/core';
import { Countries } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino:string = "";
  hayError:boolean = false;
 paises:Countries[]=[];
 paisesSugerencia:Countries[]=[];
 mostrarsugerencias:boolean = false;



  buscar(termino:string){

    this.hayError=false;
    this.termino =termino;
    this.paisservicio.buscarPais(this.termino)
    .subscribe(paises=>{
      console.log(paises);
      this.paises= paises;


    },(err)=>{
      console.log('error');
      this.hayError=true;
      this.paises=[];
    })
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.mostrarsugerencias=true;
    this.termino  = termino;
    this.paisservicio.buscarPais(termino)
    .subscribe(paises=>this.paisesSugerencia=paises.splice(0,5),
      //  esta linea a continuacion es por si hay errores desaparezcan las lineas de sugerencia
              (err)=>this.paisesSugerencia=[])
  }

  buscarSugerencias(termino:string){
         this.buscar(termino);
         this.mostrarsugerencias=false;
  }

  constructor(private paisservicio:PaisService) { }


}
