import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {

  url:string = "http://localhost:3000/api/users";
  url_getUser:string = "http://localhost:3000/api/user/";
  // url:string = "http://httpbin.org/post";

  constructor(private _http: Http) {
   }

  AddUser(): Observable<any>{
        return this._http.get(this.url).map((res:Response) => res)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  GetAllUsers():Observable<any>{
    return this._http.get(this.url)
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  GetUser(id: string){
    return this._http.get(this.url_getUser + id)
            .map((res:Response) => res)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}


//
        // return this._http.post(this.url, JSON.stringify("toast"), headers).map((res:Response) => {
        //   debugger
        //   var s = res;
        // })
