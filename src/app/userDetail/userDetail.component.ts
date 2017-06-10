import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.scss'],
  providers: [UserService]
})

export class UserDetailComponent implements OnInit {
    id: string;
    private sub: any;
    user: User = new User();

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

    constructor(private route: ActivatedRoute, private _userService: UserService){
    }

    fileEvent(fileInput: any){
        let file = fileInput.target.files[0];
        let fileName = file.name;
        console.log(file);
    }
}
