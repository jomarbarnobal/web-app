import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home'

const _route: Routes = [
  { path: '', component: HomeComponent }
]

export const _router: ModuleWithProviders = RouterModule.forRoot(_route, {useHash: true })
