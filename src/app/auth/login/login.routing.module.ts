import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.route';

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
