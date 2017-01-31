import { Validators } from '@angular/forms';
// import { emailValidator, matchingPasswords } from './validators';

export class FormBase {
    value: string;
    type: string;
    key: string;
    label: string;
    validators: any[];

    constructor(options: {
        value?: string;
        type?: string;
        key?: string;
        label?: string;
        validators?: any[];
    } = {} ) {
        this.value = options.value;
        this.type = options.type || '';
        this.key = options.key || '';
        this.label = options.label || '';
        this.validators = options.validators === undefined ? [] : options.validators;
    }
}

export const SIGN_IN_FORM: FormBase[] = [
    new FormBase({
        key: 'email',
        label: 'Email',
        type: 'email',
        validators: [
            Validators.required
            // emailValidator,
        ]
    }),
    new FormBase({
        key: 'password',
        label: 'Password',
        type: 'password',
        validators: [
            Validators.required,
        ]
    })
]

export const SIGN_UP_FORM: FormBase[] = [
    new FormBase({
        key: 'email',
        label: 'Email',
        type: 'email',
        validators: [
            Validators.required,
            Validators.minLength(8)
            // emailValidator
        ]
    }),
    new FormBase({
        key: 'password',
        label: 'Password',
        type: 'password',
        validators: [
            Validators.required,
            Validators.minLength(8)
        ]
    }),
    new FormBase({
        key: 'passwordConfirmation',
        label: 'Password Confirmation',
        type: 'password',
        validators: [
            Validators.required,
            Validators.minLength(8)
            // matchingPasswords
            ]
    }), 
]

export const COMMENT_FORM: FormBase[] = [
    new FormBase({
        key: 'comment',
        label: 'Comment',
        type: 'text-area',
        validators: [
            Validators.required,
            Validators.minLength(20)
        ]
    })
]