import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { FormService } from './service';
//Import Components
import { UserComponent } from './user.component';
import { LoginComponent } from './log-in';
import { SignUpComponent } from './sign-up';
import { ErrorComponent } from './form/error'
import { FormComponent } from './form';
import { FormFieldComponent} from './form/form-field';
import { FormLinkComponent } from './form/link';

@NgModule({
  imports: [ 
    RouterModule,
    MaterializeModule,
    CommonModule,
    ReactiveFormsModule
  ],

  declarations: [
    LoginComponent,
    SignUpComponent,
    UserComponent,
    ErrorComponent,
    FormComponent,
    FormFieldComponent,
    FormLinkComponent
  ],

  exports: [
    LoginComponent,
    SignUpComponent,
    UserComponent,
    ErrorComponent,
    FormComponent,
    FormFieldComponent,
    FormLinkComponent
   ],

  providers: [
    Angular2TokenService,
    FormService
  ]
})

export class UserModule {}