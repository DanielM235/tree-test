import { NgModule } from '@angular/core';
import { EditionRoutes } from './edition.route';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild(EditionRoutes)],
    exports: [RouterModule]
})
export class EditionRoutingModule {}
