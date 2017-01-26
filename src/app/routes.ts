import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home';
import { LoginComponent } from './user-login'

const _route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/sign-in', component: LoginComponent }
]

export const _router: ModuleWithProviders = RouterModule.forRoot(_route, {useHash: true })
