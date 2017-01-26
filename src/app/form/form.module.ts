import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule} from '@angular/forms'
// import all the component in form and thier child component 
import { FormComponent } from './form.component';
import { ErrorCompnent } from '../form/error';
import { FormFieldComponent } from '../form/field'


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations:[
    FormComponent,
    ErrorCompnent,
    FormFieldComponent
  ],
  exports: [
    FormComponent,
    ErrorCompnent,
    FormFieldComponent
  ],
  providers: []
})

export class FormModule {}