import { Component, viewChild, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavOptionsComponent } from '../nav-options/nav-options.component';


@Component({
  selector: 'app-container-login',
  templateUrl: './container-login.component.html',
  styleUrl: './container-login.component.css'
})
export class ContainerLoginComponent {
  showLogin: Boolean = true;

  //Investigar mas el viewChild
  @ViewChild('login')
  elementoLogin!: LoginComponent;

  @ViewChild('signup')
  elementoRegister!: NavOptionsComponent;



  switchAuthProcess() {
    if (this.showLogin) {
      this.showLogin = false;
    }
    else {
      this.showLogin = true;
    }
  }


}
