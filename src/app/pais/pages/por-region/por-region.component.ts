import { Component } from '@angular/core';
import { Countries } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  paises:Countries[]=[];

  regiones:string[]= ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string="";

  activarRegion(region:string){

      if(this.regionActiva===region){return;}   //esto se hace porq si se vuelve a dar clic en la misma region no vuelva y haga la busqueda
      this.regionActiva = region;

      this.paises=[];                             // esto se hace para vaciar el arreglo de paises si estaba catgado con paises de region y asi no se demora tanto en cargarlos en la tabla

    this.paisservicio.getporRegion(this.regionActiva)
    .subscribe(paises=>{this.paises=paises;
    })
  }

  ActivarRegion(region:string):string{
   return (region === this.regionActiva)?'btn btn-primary boton':'btn btn-outline-primary boton';
  }

  getpaisesRegion(){

  }

  constructor(private paisservicio:PaisService) { }



}
