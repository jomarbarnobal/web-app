import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'user-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})

export class LinkComponent{
  constructor(private _links: Router){}
}

