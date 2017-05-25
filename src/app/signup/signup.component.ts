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
    constructor(private _userService: UserService){

    }

    submitSignUp(){
        this._userService.AddUser()
                  .subscribe(res => {
                        debugger   
                      console.log(res);
                  }
                  );
    }
}
