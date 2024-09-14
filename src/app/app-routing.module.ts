import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionRoute } from './edition/edition.route';
import { LoginRoute } from './auth/login/login.route';
import { HomeRoute } from './home/home.routes';

const routes: Routes = [LoginRoute, EditionRoute, HomeRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
