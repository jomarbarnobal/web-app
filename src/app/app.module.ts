import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment/moment.module'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component'
import { _router } from './routes';
// import custom module here
import { HomeModule } from './home';
// Header component
import { HeaderComponent } from './header';
import { SideNavComponent } from './header/sidenav';
// Footer component
import { FooterComponent } from './footer'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    HomeModule,
    _router
  ],
  providers: [ 
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
