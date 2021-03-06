import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home';
import { LoginComponent } from './user-login'
import { RegisterComponent } from './user-register'

const _route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/sign-in', component: LoginComponent },
  { path: 'user/sign-up', component: RegisterComponent }
]

export const _router: ModuleWithProviders = RouterModule.forRoot(_route, {useHash: true })
