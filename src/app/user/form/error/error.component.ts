import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-message',
  template: `
  <div class="full-error-message" *ngFor="let error of errors">
    <p> {{ error }}</p>  
  </div>
  `,
  styles: [`
    .full-error-message p {
      margin.bottpm: 0;
    }
  `]

})

export class ErrorComponent {
  @Input() errors: string[];
}