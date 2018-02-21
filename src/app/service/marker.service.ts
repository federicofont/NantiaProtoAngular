import{Injectable} from '@angular/core';
import{Init} from '../init-markers';

@Injectable()
export class MarkerService extends Init{
	constructor(){
		super();
		console.log('Servicio de marcador iniciado...');
		this.load();
	}

	obtenerMarcadores(){
		var markers = JSON.parse(localStorage.getItem('markers'));
		return markers;
	}

	agregarMarcador(nuevoMarcador){
		//mostrar marcadores
		var markers =JSON.parse(localStorage.getItem('markers'));

		//agregar el arreglo
		markers.push(nuevoMarcador);
		//configurar en el local storage
		localStorage.setItem('markers',JSON.stringify(markers));
	}
}