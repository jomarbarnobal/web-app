import { Component, EventEmitter, Output } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';
import { 
  FormService,
  SIGN_IN_FORM,
  SignInData
} from '../../../../user/service'
@Component({
  selector: 'sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  private _errors: string[];
  constructor(
    private _formService: FormService,
    private _tokenService: Angular2TokenService,
    private _router: Router
  ){
    //initialize form
    this._formService.initForm(SIGN_IN_FORM);
    //initialize url base api
    this._tokenService.init({
      apiBase: 'https://blog-api-app.herokuapp.com'
    })
    //submit form
    this._formService.submit$.subscribe(
      (data: SignInData) => this._tokenService.signIn(data)
        .subscribe(
          (res: any) => this._handleSuccess(res),
          (error: any) => this._handleError(error)
        )
    )
    
  }


  private _handleSuccess(data: any){
    this._errors = null;
    this._formService.unlockSubmit();
    this._formService.closeModal()
    this._router.navigate([''])
  }

  private _handleError(error: any){
    this._errors = error.json().errors;
    this._formService.unlockSubmit();
  }

 modalActions = new EventEmitter<string|MaterializeAction>();

  closeModal() {
    this.modalActions.emit({action: "modal", params: ["close"]});
  }
 
}
