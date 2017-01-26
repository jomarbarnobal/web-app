import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-message',
  template: `
   <div class="full-error-message"
     *ngFor="let error of errors">
      <p> {{ error }}</p>
   </div>
  `
})

export class ErrorCompnent {
  @Input() errors: string[]
}