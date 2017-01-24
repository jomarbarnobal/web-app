import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MaterializeModule } from 'angular2-materialize';
import { HeaderComponent } from './header';
import { SideNavComponent } from './header/sidenav';
import { FooterComponnet } from './footer';
import { LoginComponent } from './header/session/login'
import { ErrorComponent } from '../user/form/error'
import { FormComponent } from '../user/form';
import { FormFieldComponent} from '../user/form/form-field';
import { FormLinkComponent } from '../user/form/link';

// form
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Angular2TokenService } from 'angular2-token';
import { FormService } from '../user/service';



@NgModule({
  imports: [
    MaterializeModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ 
    HeaderComponent,
    SideNavComponent,
    FooterComponnet,
    LoginComponent,
    ErrorComponent,
    FormComponent,
    FormFieldComponent,
    FormLinkComponent
    ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponnet,
    LoginComponent,
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

export class SharedModule {}
