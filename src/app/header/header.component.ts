import { Component, Input, Output} from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
    selector: 'header-page',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
    constructor(
        private _router: Router,
        private _tokenService: Angular2TokenService){
        this._tokenService.init({
            apiBase: 'http://localhost:3000'
        })
    }

    logOut(){
        this._tokenService.signOut()
        this._successLogout()
    }

    private _successLogout(){
        this._router.navigate(['/'])    
    }

}