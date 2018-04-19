import { Component, OnInit } from '@angular/core';
import { NavIzquierdaComponent } from '../nav-izquierda/nav-izquierda.component';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  // navegacion:NavIzquierdaComponent;
  sitio:string;
  constructor() {
    // this.sitio=this.navegacion.sitioTuristico;
    console.log(this.sitio);
    
   }
  
  ngOnInit() {
  }

  
}
