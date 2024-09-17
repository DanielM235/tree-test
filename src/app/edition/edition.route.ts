import { Route, Routes } from '@angular/router';
import { EditionComponent } from './edition.component';
import { ImListResolver } from './resolvers/im-list.resolver';
import { EditionStateResolver } from './resolvers/edition-state.resolver';

export const EditionRoutePath = 'edition';

export const EditionRoute: Route = {
    path: EditionRoutePath,
    loadChildren: () => import('./edition.module').then(m => m.EditionModule)
}

export const EditionRoutes: Routes = [
        {
            path: '',
            component: EditionComponent,
            resolve: {
              editionState: EditionStateResolver
            }
        },
        {
            path: `:id`,
            component: EditionComponent,
        },
        {
            path: `:id/:imId`,
            component: EditionComponent,
        },
        {
            path: `:id/:type/:parentId/:imId/:comment`,
            component: EditionComponent,
        },
        {
            path: `:id/:imId/:parentId/:type/:comment`,
            component: EditionComponent,
        },
        {
            path: `:id/:type/:parentId/:imId/:comment/:languageIdentifier`,
            component: EditionComponent,
        },
        {
            path: '**',
            redirectTo: EditionRoutePath,
            pathMatch: 'full'
        }
    ]
;
