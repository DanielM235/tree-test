import { NgModule } from '@angular/core';
import { EditionComponent } from './edition.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LeftSidebarItemComponent } from './left-sidebar/left-sidebar-item/left-sidebar-item.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { EditionRoutingModule } from './edition-routing.module';
import { CommonModule } from '@angular/common';
import { EditionStateResolver } from './resolvers/edition-state.resolver';
import { TestTreeModule } from '../test-tree/test-tree.module';

@NgModule({
  imports: [AccordionModule, EditionRoutingModule, CommonModule, TestTreeModule],
  declarations: [EditionComponent, LeftSidebarComponent, LeftSidebarItemComponent],
  providers: [EditionStateResolver]
})
export class EditionModule {}
