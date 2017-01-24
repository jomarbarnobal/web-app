import { Component } from '@angular/core';
import { FormService } from '../service';
import { FormFieldComponent } from '../form/form-field';

@Component({
  selector: './user-form',
  templateUrl: './form.component.html'
})

export class FormComponent {
  
  constructor(private _formService: FormService ){}

}

