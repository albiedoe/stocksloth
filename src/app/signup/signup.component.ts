import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignUpComponent {
    signUp = "Sign down";
    users: any;
    
    constructor(private _userService: UserService){
        this._userService.AddUser()
                .subscribe(res => {
                    this.users = res.json();
                      console.log(res.json());
                  }
            );
    }

    submitSignUp(){
        this._userService.AddUser()
                  .subscribe(res => {
                      console.log(res._body);
                  }
                  );
    }
}
