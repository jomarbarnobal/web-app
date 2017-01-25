import { Component, Input, EventEmitter } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize'
import { 
  FormService,
  SIGN_IN_FORM,
  SignInData
} from '../../user/service'



@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  title = 'Angular2'
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
    this.closeModal1();
    this._router.navigate(['']);
  }

  private _handleError(error: any){
    this._errors = error.json().errors;
    this._formService.unlockSubmit();
  }

  logOut(){
    this._tokenService.signOut()
    this._successLogout()  
  }

  private _successLogout(){
    this._router.navigate(['']);
  }

  modalActions1 = new EventEmitter<string|MaterializeAction>();
  
   openModal1() {
      this.modalActions1.emit({action:"modal",params:['open']});
  }

  closeModal1() {
    this.modalActions1.emit({action:"modal",params:['close']});
  }

}