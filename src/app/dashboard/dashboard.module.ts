import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { DashBoardComponent } from './dashboard.component';
import { DashboardSideNavComponent } from './dashboard-sidenav';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule
  ],
  declarations: [
    DashBoardComponent,
    DashboardSideNavComponent
  ],
  exports: [
    DashBoardComponent,
    DashboardSideNavComponent
  ]
})

export class DashBoardModule {}