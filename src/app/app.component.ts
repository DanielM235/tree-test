import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRoutePath } from './auth/login/login.route';
import { EditionRoutePath } from './edition/edition.route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tree-test';

  constructor(private readonly router: Router) {
  }

  goToEdition(): void {
    this.router.navigate([EditionRoutePath]);
  }

  goToLogin(): void {
    this.router.navigate([LoginRoutePath]);
  }
}
