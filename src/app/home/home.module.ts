import { NgModule } from '@angular/core';
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

@NgModule({
    imports: [
        MaterializeModule,
        MomentModule,
        RouterModule,
        ShareButtonsModule,
        BrowserModule
    ],
    declarations:[
        HomeComponent,
        BannerComponent,
        PostsComponent
    ],
    exports: [
        HomeComponent,
        BannerComponent,
        PostsComponent
    ]
})

export class HomeModule {}