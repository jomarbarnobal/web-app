import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MaterializeModule } from 'angular2-materialize';
import { MomentModule } from 'angular2-moment';
import { RouterModule } from '@angular/router'
import { ShareButtonsModule } from 'ng2-sharebuttons';
import { BrowserModule } from '@angular/platform-browser'
// home +/+/ component
// import home component ang thier child component
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner';
import { PostsComponent } from './posts';
import { ShowPostComponent } from './show-post'; 
import { CommentCardComponent } from './comment'
import { CommentFormComponent } from './comment-form'

@NgModule({
    imports: [
        MaterializeModule,
        MomentModule,
        RouterModule,
        ShareButtonsModule,
        BrowserModule,
        FormsModule
    ],
    declarations:[
        HomeComponent,
        BannerComponent,
        PostsComponent,
        ShowPostComponent,
        CommentCardComponent,
        CommentFormComponent
    ],
    exports: [
        HomeComponent,
        BannerComponent,
        PostsComponent,
        ShowPostComponent,
        CommentCardComponent,
        CommentFormComponent
    ]
})

export class HomeModule {}