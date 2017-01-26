import { Component } from '@angular/core';
import { FormService } from './form.service'

@Component({
  selector: 'user-form',
  templateUrl: './form.component.html',
})

export class FormComponent {
  
  constructor(private _formService: FormService){}
}