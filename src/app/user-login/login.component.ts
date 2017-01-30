import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService, SignInData } from 'angular2-token';
import { FormService } from '../form';
import { SIGN_IN_FORM } from '../form';



@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ FormService ]
})

export class LoginComponent{
  
  private _errors: string[]

  constructor(
    private _formService: FormService,
    private _tokenService: Angular2TokenService,
    private _router: Router
  ){
    this._formService.initForm(SIGN_IN_FORM);
    this._tokenService.init({
      // apiBase: 'https://blog-api-app.herokuapp.com'
      apiBase: 'http://localhost:3000'
    })

    this._formService.submit$.subscribe(
      (data: SignInData) => this._tokenService.signIn(data)
        .subscribe(
          res => this._handleSuccess(res),
          err => this._handleError(err)
        )
    )
  }

  private _handleSuccess(data: any){
    this._errors = null;
    this._formService.unlockSubmit();
    this._router.navigate(['/'])
  }

  private _handleError(error: any){
    this._errors = error.json().errors;
    this._formService.unlockSubmit();
  }

}