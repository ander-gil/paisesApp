import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators';
import { Countries } from '../../interfaces/paises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  // con el ! le estoy diciendo a type script que aunque esta definido yo se como lo voy a manejar para trabajarlo cuando este asi

  pais!:Countries;

  constructor(private activateroute:ActivatedRoute, private paisServicio:PaisService) { }

  ngOnInit(): void {

    this.activateroute.params
    .pipe(switchMap(({id})=> this.paisServicio.getporCodigoPais(id)),
     tap(resp=> console.log(resp))
     )
    .subscribe(pais=>{this.pais = pais;
    })







    // .subscribe(({id})=>{
    //   console.log(id);

    //   this.paisServicio.getporCodigoPais(id)
    //   .subscribe(pais=>{
    //     console.log(pais);
    //   })
    // })

  }

}
