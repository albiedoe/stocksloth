import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'user',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.scss'],
  providers: [UserService, PhotoService]
})

export class UserDetailComponent implements OnInit {
    id: string;
    private sub: any;
    user: User = new User();
    uploadFile: File;
    response = "no res";

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            this._userService.GetUser(this.id)
                .subscribe(res => {
                    this.user = res.json();
                      console.log(res.json());
                  });
        });
    }

    constructor(private route: ActivatedRoute, private _userService: UserService, private _photoService: PhotoService){
    }

    fileEvent(fileInput: any){
        this.uploadFile = fileInput.target.files[0];
        let fileName = this.uploadFile.name;
    }

    pushPhoto(){
        var s = this.uploadFile;
        this._photoService.AddPhoto(this.id, this.uploadFile);
        // .subscribe(res => {
        //             console.log("return");
        //               console.log(res.json());
        //           });

    }
}
