import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MaterializeModule } from 'angular2-materialize';
import { HeaderComponent } from './header';
import { SideNavComponent } from './header/sidenav';
import { FooterComponnet } from './footer';


@NgModule({
  imports: [
    MaterializeModule,
    RouterModule
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
