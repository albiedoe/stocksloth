import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

  url:string = "http://localhost:3000/api/quotes";
  // url:string = "http://httpbin.org/post";

  constructor(private _http: Http) { }

  AddUser(): Observable<any>{
        // let encoded_data = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url, JSON.stringify("toast"), headers).map((res:Response) => res)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}


//
        // return this._http.post(this.url, JSON.stringify("toast"), headers).map((res:Response) => {
        //   debugger
        //   var s = res;
        // })
