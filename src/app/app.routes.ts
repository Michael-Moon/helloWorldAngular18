import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MotoComponent } from './pages/moto/moto.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'moto',
    component: MotoComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];
