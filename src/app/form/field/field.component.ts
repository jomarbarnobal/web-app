import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms'
import { FormService } from '../form.service';
import { FormBase } from '../form.base'


@Component({
  selector: 'user-form-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

export class FormFieldComponent implements OnInit {
  @Input() question: FormBase;
  @Input() form: FormGroup;
    
  private _control: AbstractControl

   ngOnInit(){
     this._control = this.form.controls[this.question.key]
   }

   get isValid(){
     return this._control.valid
   }
}