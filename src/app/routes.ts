import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { HomeComponent } from './home';
import { LoginComponent } from './user-login';
import { RegisterComponent } from './user-register';
import { ShowPostComponent } from './home/show-post';
import { DashBoardComponent } from './dashboard';
import { NewPostComponent } from './new-post'

const _route: Routes = [
  { path: '', component: HomeComponent},
  {path: 'post/:id', component: ShowPostComponent},
  { path: 'user/sign-in', component: LoginComponent },
  { path: 'user/sign-up', component: RegisterComponent },
  { path: 'dashboard/user/:id', component: DashBoardComponent, canActivate: [ Angular2TokenService ]},
  { path: 'new-post', component: NewPostComponent, canActivate: [ Angular2TokenService ]}
]

export const _router: ModuleWithProviders = RouterModule.forRoot(_route, {useHash: true })
