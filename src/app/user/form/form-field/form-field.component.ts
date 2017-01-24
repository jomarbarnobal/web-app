import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl} from '@angular/forms'
import { FormBase } from '../../service'

@Component({  
  selector: 'user-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']

})

export class FormFieldComponent  implements OnInit {
  @Input() question: FormBase;
  @Input() form: FormGroup 
    
  private _control: AbstractControl;

  ngOnInit(){
    this._control = this.form.controls[this.question.key]
  }

  get isValid(){
    return this._control.valid
  }
}