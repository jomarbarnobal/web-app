import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { MaterializeModule } from 'angular2-materialize';
import { HeaderComponent } from './header';
import { SideNavComponent } from './header/sidenav';
import { FooterComponnet } from './footer';
import { Angular2TokenService} from 'angular2-token'
//////////////

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormService } from '../user/service';
//Import Components
import { ErrorComponent } from '../user/form/error'
import { FormComponent } from '../user/form';
import { FormFieldComponent} from '../user/form/form-field';
import { FormLinkComponent } from '../user/form/link';

@NgModule({
  providers: [ Angular2TokenService, FormService  ],
  imports: [
    MaterializeModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    HeaderComponent,
    SideNavComponent,
    FooterComponnet,
    //
    ErrorComponent,
    FormComponent,
    FormFieldComponent,
    FormLinkComponent
    ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponnet,
    //
    ErrorComponent,
    FormComponent,
    FormFieldComponent,
    FormLinkComponent
  ],
})

export class SharedModule {}
