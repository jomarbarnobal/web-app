import { Component } from '@angular/core';
import { Angular2TokenService} from 'angular2-token';
import { Router } from '@angular/router';
import { 
    SIGN_UP_FORM, 
    FormService,
    RegisterData 
} from '../service';
@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

   private _errors: string[];

  constructor(
    private _tokenService: Angular2TokenService,
    private _formService: FormService,
    private _router: Router
  ){
    //initialize form
    this._formService.initForm(SIGN_UP_FORM)
    //initialize api with registration confirm success redirect url path 
    this._tokenService.init({
      apiBase: 'https://blog-api-app.herokuapp.com',
      registerAccountCallback: 'https://jomarbarnobal.github.io/web-app/#/home'
    })
    //submit form
    this._formService.submit$.subscribe(
      (data: RegisterData) =>
      this._tokenService.registerAccount(data)
        .subscribe(
          res => this._handleSucccess(res),
          error => this._handleError(error)
        )
    )    
  }

  private _handleSucccess(data: any){
    this._errors = null;
    this._formService.unlockSubmit();
    this._router.navigate(['successfull-sign-up']);
  }

  private _handleError(error: any){
    this._errors = error.json().errors.full_messages;
    this._formService.unlockSubmit();
  }
}