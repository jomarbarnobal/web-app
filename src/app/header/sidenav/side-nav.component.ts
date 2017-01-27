import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {
     constructor(
         private _tokenService: Angular2TokenService,
         private _router: Router){
        this._tokenService.init({
            apiBase: 'https://blog-api-app.herokuapp.com'
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