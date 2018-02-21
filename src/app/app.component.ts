import { Component } from '@angular/core';
import { MarkerService } from './service/marker.service';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  template:` 
  <app-mapa></app-mapa>
  `,
    providers: [MarkerService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'AGM SODA NANTIA';

    data: any = null;

  //constructor(private _http: Http) {
  //  this.getMyBlog();
  //}

  //private getMyBlog() {
  //  return this._http.get('https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078')
   //             .map((res: Response) => res.json())
    //             .subscribe(data => {
     //                   this.data = data;
      //                  console.log(this.data);
       //         });
  //}
	
  }

