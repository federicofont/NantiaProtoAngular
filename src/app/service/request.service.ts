import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable ()
export class RequestService{
	 public url:string;

	constructor(private _http:Http){
		this.url="https://jsonplaceholder.typicode.com/posts"
	}

	getPrueba(){
		return 'Hola mundo desde el service.';
	}

	getPuntos(){
		return this._http.get(this.url)
						 .map(res=>res.json());
	}





}






