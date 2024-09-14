import { Route, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutePath = 'home';
export const HomeRoute: Route = {
  path: HomeRoutePath,
  loadChildren: () => import('./home.module').then(m => m.HomeModule)
}
export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]
