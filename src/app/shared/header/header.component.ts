import { Component, Input, EventEmitter } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'
import { Router } from '@angular/router';



@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  title = 'Angular2'

  constructor(
    private _tokenService: Angular2TokenService,
    private _router: Router
    ){
    this._tokenService.init({
      apiBase: 'https://blog-api-app.herokuapp.com',
    })
  }

  logOut(){
    this._tokenService.signOut()
    this._successLogout()  
  }

  private _successLogout(){
    this._router.navigate(['']);
  }
}