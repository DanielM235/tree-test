import { NgModule } from '@angular/core';
import { EditionComponent } from './edition.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LeftSidebarItemComponent } from './left-sidebar/left-sidebar-item/left-sidebar-item.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { EditionRoutingModule } from './edition-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [AccordionModule, EditionRoutingModule, CommonModule],
  declarations: [EditionComponent, LeftSidebarComponent, LeftSidebarItemComponent]
})
export class EditionModule {}
