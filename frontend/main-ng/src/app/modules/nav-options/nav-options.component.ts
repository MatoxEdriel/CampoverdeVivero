import { Component, EventEmitter, Output } from '@angular/core';
import { ISignUp } from '../../interfaces/login.interface';


@Component({
  selector: 'app-nav-options',
  templateUrl: './nav-options.component.html',
  styleUrl: './nav-options.component.css'
})
export class NavOptionsComponent {
  //with this I can make this method public, its mean that 
  //it will hear from father component
  @Output() switchEvent = new EventEmitter();
  //instance the class EventEmitter to got the method emmit

  //create the interface to taste the method
  firstInputpassword: string = '';
  confirmInputpassword: string = '';
  
  signupobject: ISignUp = {
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    password: ''
  }



  clicEventEmitter() {
    this.switchEvent.emit();
  }





}
