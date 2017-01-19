import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BannerComponent } from './banner';
import { HomeComponent } from './home.component';
import { MaterializeModule } from 'angular2-materialize'
import { PostsComoponent } from './post'


@NgModule({
  imports: [
    MaterializeModule,
    CommonModule
  ],
  
  declarations: [
    BannerComponent,
    HomeComponent,
    PostsComoponent
  ],
  exports: [
    BannerComponent,
    HomeComponent,
    PostsComoponent
  ]
  
})

export class HomeModule {}