import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home'

const _route: Routes = [
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent}
]

export const _router: ModuleWithProviders = RouterModule.forRoot(_route)
