import { Injectable, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Subject } from 'rxjs/Subject'
import { FormBase } from './user.model'

@Injectable()

export class FormService {

    public submit$ = new EventEmitter<any>();
    public submitLock: boolean = false;
    public formGroup: FormGroup;
    public fields: FormBase[];

    constructor(){}

    public initForm(fields: FormBase[]){
        this.fields = fields;
        this._createFormGroup();
    } 

    public submit(){
        this.submitLock = true;
        this.submit$.emit(this.formGroup.value);
    }

    public unlockSubmit(){
        this.formGroup.reset();
        this.submitLock = false;
    }

    public _createFormGroup(){
        let group: any = {};

        this.fields.forEach(question => {
            group[question.key] = new FormControl(null, question.validators);
        })

        this.formGroup = new FormGroup(group)
    }
}