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

  AddPhoto(user_id: string, uploadFile: File){
    // let formData: FormData = new FormData();
    // formData.append('toastFile', uploadFile, uploadFile.name);

    //     let headers = new Headers();
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    //     let options = new RequestOptions({ headers: headers });

    //   return this._http.post(this.url+user_id, formData )
    //         .map((res:Response) => res)
    //         .catch((error:any) => 
    //         Observable.throw(error || 'Server error'));;

    let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();

            formData.append("toastFile", uploadFile, uploadFile.name);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('success:' + (JSON.parse(xhr.response)));
                } else {
                    console.log('status' + xhr.response);
                }
            }
        };


        xhr.upload.onprogress = (event) => {
            console.log(Math.round(event.loaded / event.total * 100));
        };

        xhr.open('POST', this.url+user_id, true);
        xhr.send(formData);

  };

}