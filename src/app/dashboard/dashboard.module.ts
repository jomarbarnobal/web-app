import { NgModule} from '@angular/core';
import { DashBoardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post';


@NgModule({
    imports: [
        RouterModule,
        BrowserModule
    ],

    declarations:[
        DashBoardComponent,
        NewPostComponent,
    ],
    
    exports: [
        DashBoardComponent,
        NewPostComponent
    ]

})

export class DashBoardModule {}