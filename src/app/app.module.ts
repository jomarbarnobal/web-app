import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment/moment.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { HomeModule } from './home';
import { UserModule } from './user';
import { SharedModule } from './shared';
import { DashBoardModule } from './dashboard';
import { AppComponent } from './app.component';
import { PostService, ApiService }from './services';
import { _router } from './routes';
// import { ErrorComponent } from './user/form/error'

// Angular2-token


@NgModule({
  declarations: [
    AppComponent,
    // ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ReactiveFormsModule,
    HomeModule,
    UserModule,
    SharedModule,
    MomentModule,
    DashBoardModule,
    _router
  ],
  providers: [ 
    ApiService, 
    PostService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
