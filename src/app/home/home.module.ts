import { NgModule } from '@angular/core';
// home +/+/ component
// import home component ang thier child component
import { HomeComponent } from './home.component'
@NgModule({
    imports: [],
    declarations:[
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}