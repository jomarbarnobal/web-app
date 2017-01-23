import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment/moment.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { HomeModule } from './home';
import { SharedModule } from './shared'
import { AppComponent } from './app.component';
import { PostService, ApiService }from './services'
import { _router } from './routes'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ReactiveFormsModule,
    HomeModule,
    SharedModule,
    MomentModule,
    _router
  ],
  providers: [ 
    ApiService, 
    PostService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
