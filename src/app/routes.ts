import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { SinglePostComponent } from './home/posts/show';
const _route: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: SinglePostComponent }
]

export const _router: ModuleWithProviders = RouterModule.forRoot(_route, {useHash: true })
