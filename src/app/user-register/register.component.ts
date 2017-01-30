import { Component } from '@angular/core';
import { FormService } from '../form';
import { Router } from '@angular/router';
import { Angular2TokenService, RegisterData } from 'angular2-token';
import { SIGN_UP_FORM } from '../form';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ FormService ]
})

export class RegisterComponent {
  
  private _errors: string[];

  constructor(
    private _formService: FormService,
    private _tokenService: Angular2TokenService,
    private _router: Router
  ){
    this._formService.initForm(SIGN_UP_FORM);
    this._tokenService.init({
      // apiBase: 'https://blog-api-app.herokuapp.com'
      apiBase: 'http://localhost:3000'
    })
    this._formService.submit$.subscribe(
      (data: RegisterData ) => this._tokenService.registerAccount(data)
        .subscribe(
          res => this._handleSuccess(res),
          err => this._handleError(err)
        )
    )
  }

  private _handleSuccess(data: any){
    this._errors = null;
    this._formService.unlockSubmit();
    this._router.navigate(['sucessfull-sign-up']);
  }

  private _handleError(error: any){
    this._errors = error.json().errors.full_messages;
    this._formService.unlockSubmit();
  }
}
