import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { treeReducer } from './store/reducers/tree.reducer';
import { TreeEffects } from './store/effects/tree.effects';
import { TestTreeModule } from './test-tree/test-tree.module';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './store/reducers/auth.reducer';
import { editionReducer } from './store/reducers/edition.reducer';
import { EditionEffects } from './store/effects/edition.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ tree: treeReducer, auth: authReducer, edition: editionReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Conserve les 25 derniers états
      logOnly: !isDevMode(), // Mode lecture seule en production
      autoPause: true, // Pause l'enregistrement quand la fenêtre DevTools est fermée
      // trace: false, // Inclut la trace de pile pour chaque action
      // traceLimit: 75, // Limite des frames de trace de pile
      // connectInZone: true // Établit la connexion dans la zone Angular
    }),
    EffectsModule.forRoot([TreeEffects, AuthEffects, EditionEffects]),
    BrowserAnimationsModule,
    TestTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
