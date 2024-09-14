import { Route, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const LoginRoutePath = 'login';
export const LoginRoute: Route = {
  path: LoginRoutePath,
  loadChildren: () => import('./login.module').then(m => m.LoginModule)
};

export const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
