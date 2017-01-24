import { Injectable, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';
import { Subject } from 'rxjs/Subject'
import { FormBase } from './user.model'

@Injectable()

export class FormService {
    public  modalActions = new EventEmitter<string|MaterializeAction>();
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

    public closeModal(){
       this.modalActions.emit({action:"modal",params:['close']});
    }

    public _createFormGroup(){
        let group: any = {};

        this.fields.forEach(question => {
            group[question.key] = new FormControl(null, question.validators);
        })

        this.formGroup = new FormGroup(group)
    }
}