import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule} from '@angular/forms'
import { RouterModule} from '@angular/router'
// import all the component in form and thier child component 
import { FormComponent } from './form.component';
import { ErrorCompnent } from '../form/error';
import { FormFieldComponent } from '../form/field'
import { LinkComponent } from '../form/links';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations:[
    FormComponent,
    ErrorCompnent,
    FormFieldComponent,
    LinkComponent
  ],
  exports: [
    FormComponent,
    ErrorCompnent,
    FormFieldComponent,
    LinkComponent
  ],
  providers: []
})

export class FormModule {}