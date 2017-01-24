import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { SinglePostComponent } from './home/posts/show';
import { UserComponent } from './user';
import { LoginComponent } from './user/log-in';
import { SignUpComponent } from './user/sign-up';

const _route: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'users', component: UserComponent,
    children: [
      { path: 'sessions/sign-in', component: LoginComponent },
      { path: 'sessions/sign-up', component: SignUpComponent}
    ]
  }
]

export const _router: ModuleWithProviders = RouterModule.forRoot(_route, {useHash: true })
