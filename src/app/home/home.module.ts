import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BannerComponent } from './banner';
import { HomeComponent } from './home.component';
import { MaterializeModule } from 'angular2-materialize'
import { PostsComponent } from './posts'
import { SinglePostComponent } from './posts/show'



@NgModule({
  imports: [
    MaterializeModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    BannerComponent,
    HomeComponent,
    PostsComponent,
    SinglePostComponent,
  ],
  exports: [
    BannerComponent,
    HomeComponent,
    PostsComponent,
    SinglePostComponent,
  ]
  
})

export class HomeModule {}