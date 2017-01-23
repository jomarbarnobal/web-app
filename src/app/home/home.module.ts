import { NgModule } from '@angular/core';
import { } from 'angular2-momment';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { BannerComponent } from './banner';
import { HomeComponent } from './home.component';
import { MaterializeModule } from 'angular2-materialize'
import { PostsComponent } from './posts'
import { SinglePostComponent } from './posts/show'
import { CommentComponent } from './comments';
import { MomentModule } from 'angular2-moment/moment.module'





@NgModule({
  imports: [
    MaterializeModule,
    CommonModule,
    RouterModule,
    MomentModule
  ],
  declarations: [
    BannerComponent,
    HomeComponent,
    PostsComponent,
    SinglePostComponent,
    CommentComponent
  ],
  exports: [
    BannerComponent,
    HomeComponent,
    PostsComponent,
    SinglePostComponent,
    CommentComponent
  ]
  
})

export class HomeModule {}