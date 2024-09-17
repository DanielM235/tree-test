import { NgModule } from '@angular/core';
import { TestTreeComponent } from './test-tree.component';
import { TestTreeItemComponent } from './test-tree-item/test-tree-item.component';

import { TreeModule } from '@circlon/angular-tree-component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [TreeModule, CommonModule],
  declarations: [
    TestTreeComponent,
    TestTreeItemComponent
  ],
  exports: [TestTreeComponent]
})
export class TestTreeModule{}
