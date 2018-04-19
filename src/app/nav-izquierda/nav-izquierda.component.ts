import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-izquierda',
  templateUrl: './nav-izquierda.component.html',
  styleUrls: ['./nav-izquierda.component.css']
})
export class NavIzquierdaComponent implements OnInit {

  menuIzquierdo:string[];
  subMenuProvincias:string[];
  cascadas:string[];
  lagunas:string[];
  sitioTuristico:string;
  constructor() { 
    this.menuIzquierdo=['Provincias', 'Cascadas','Lagunas','Hosterias','Parques','Plazas','Sendero','Balnearios','Playas'];
    this.subMenuProvincias=['Azuay','Bolivar','Carchi','Cotopaxi','Tungurahua','Imbabura','Pichincha','Chimborazo','Cañar','Loja','Sto. Domingo de los Tsachilas','Esmeraldas', 'Manabi','Guayas','Los Rios','El Oro','Santa Elena','Sucumbios', 'Napo', 'Pastaza','Orellana','Morona Santiago','Zamora Chinchipe'];
    this.cascadas=['La Era', 'El Palto','Velo de Novia','Perro Loco','Verdum'];
    this.lagunas=['Corazon','Los compadres','Lagunas negras'];
  }
  obtenerSubMenu(menu:string){
    if(menu=='Cascadas'){
      return this.cascadas;
    }
    if(menu=='Provincias'){
      // console.log("hola mundo");
      return this.subMenuProvincias;
    }
    if(menu=='Lagunas'){
      return this.lagunas;
    }
  }
  mostrarSeleccion(subMenu:string){
    this.sitioTuristico=subMenu;
    console.log(subMenu);
    
  }

  ngOnInit() {
  }

}
