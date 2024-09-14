import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Account } from '../auth/account';
import { selectAccount } from '../store/selectors/auth.selectors';
import { filter, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  account$: Observable<Account | null>;

  constructor(private readonly store: Store) {
    this.account$ = this.store.select(selectAccount).pipe(
      // filter((account: Account | null): account is Account => !!account),
      tap((account: Account | null) => this.saveAccount(account))
    );
  }

  ngOnInit(): void {

  }

  saveAccount(account: Account | null) {
    // Logique pour sauvegarder la valeur mise à jour
    console.log('Account updated:', account);
  }

}
