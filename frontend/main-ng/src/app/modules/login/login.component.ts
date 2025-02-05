import { Component, EventEmitter, Output } from '@angular/core';
import { ILogin } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() switchEvent = new EventEmitter();

  placeHolderPassword: string = "Type your password"

  //haremos un objeto con un interfaz login
  user: ILogin = {
    user:'',
    password:'',
    logged:false
  }


  loginProces(){
    console.log(JSON.stringify(this.user))
  }

  clicEventEmitter(){
    this.switchEvent.emit();

  }



  
}
