import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private _router: Router){}

}
