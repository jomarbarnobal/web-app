import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment/moment.module'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { AppComponent } from './app.component'
import { _router } from './routes';
// import custom module here
import { HomeModule } from './home';
import { FormModule} from './form'
import { DashBoardModule } from './dashboard'
// Header component
import { HeaderComponent } from './header';
import { SideNavComponent } from './header/sidenav';
// Footer component
import { FooterComponent } from './footer'
// User Compnent
import { LoginComponent } from './user-login'
import { RegisterComponent } from './user-register'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormModule,
    HttpModule,
    MaterializeModule,
    DashBoardModule,
    HomeModule,
    _router
  ],
  providers: [ 
    Angular2TokenService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
