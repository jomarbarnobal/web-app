import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'session-link',
  templateUrl: './form-link.component.html',
  styleUrls: ['./form-link.component.scss']
})

export class FormLinkComponent {

  constructor(private _links: Router){}

}