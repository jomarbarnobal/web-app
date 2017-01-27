import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styles: [`
    #slogan {
    color: #fff;
    width: 100%;
    text-shadow: 0px 3px 1px rgba(0,0,0,0.5);
    h5 {
      padding: 10px;
      background-color: rgba(0,0,0,0.3);
      text-shadow: 0px 2px 1px rgba(0,0,0,0.5);
      color: #eee;
      a {
        font-size: 1em; 
      }
    }
  }
  `]
})

export class BannerComponent {}