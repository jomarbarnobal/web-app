import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HeaderComponent } from './header';
import { SideNavComponent } from './header/sidenav';
import { FooterComponnet } from './footer';


@NgModule({
  imports: [
    MaterializeModule
  ],
  declarations: [ 
    HeaderComponent,
    SideNavComponent,
    FooterComponnet
    ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponnet
  ]
})

export class SharedModule {}
