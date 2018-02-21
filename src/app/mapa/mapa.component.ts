import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../service/marker.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  providers: [MarkerService]
})
export class MapaComponent  {

  //Posicion Inicial
  Lat: number =  -34.4493549;
  Long: number = -56.4004827;
  zoom:number = 14;
  
  nombreMarcador:string;
  latitudMarcador:string;
  longitudMarcador:string;
  marcadorMovil:string;


  //Marcadores
  markers:marker[];

  constructor(private _markerService:MarkerService) {
    this.markers = this._markerService.obtenerMarcadores();
     }

  marcadorCliqueado(marcador:marker,index:number){
  	console.log("Marcador cliqueado: " + marcador.Nombre);
  }

  mapCliqueado($event:any){
  	console.log("Mapa Cliqueado");

  	var nuevoMarcador ={
  		Nombre: "Sin Titulo",
  		Lat: $event.coords.lat,
  		Long:$event.coords.lng,
  		Movil: false
  	}

  	this.markers.push(nuevoMarcador);
  }

  posicionFinalMarcador(marcador:any, $event:any){
  	console.log("Posicion Final:",marcador,$event);

  	var actualizarMarcador ={
  		Nombre: marcador.nombre,
  		Lat: parseFloat(marcador.lat) ,
  		Long:parseFloat(marcador.lng),
  		Movil: false
  	}

  	var nuevaLat = $event.coords.lat;
  	var nuevaLong = $event.coords.lng;
  		
  }

  agregarMarcador(){
    console.log('Agregando Marcador');

    if (this.marcadorMovil == 'si') {
       var esMovil = true;
    }else{
      var esMovil = false;
    }

    var nuevoMarcador ={
      nombre:this.nombreMarcador,
      Lat:parseFloat(this.latitudMarcador),
      Long:parseFloat(this.longitudMarcador),
      Movil:esMovil
    }

    this.markers.push(nuevoMarcador);

   }

 }

//tipo de Marcado
interface marker{
	Nombre?:string;
	Lat:number;
	Long:number;
	Movil:boolean;
}