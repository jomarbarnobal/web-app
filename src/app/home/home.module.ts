import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
// home +/+/ component
// import home component ang thier child component
import { HomeComponent } from './home.component'
import { BannerComponent } from './banner'
@NgModule({
    imports: [
        MaterializeModule
    ],
    declarations:[
        HomeComponent,
        BannerComponent,
    ],
    exports: [
        HomeComponent,
        BannerComponent
    ]
})

export class HomeModule {}