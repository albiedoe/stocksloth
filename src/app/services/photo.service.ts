import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PhotoService {

  url:string = "http://localhost:3000/api/photo/add/";
  url_getUser:string = "http://localhost:3000/api/user/";
  // url:string = "http://httpbin.org/post";

  constructor(private _http: Http) {
   }

  AddPhoto(id: string){
    this._http.post(url+id)
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
  };

}


//
        // return this._http.post(this.url, JSON.stringify("toast"), headers).map((res:Response) => {
        //   debugger
        //   var s = res;
        // })
