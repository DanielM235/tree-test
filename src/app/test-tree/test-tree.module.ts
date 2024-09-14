import { NgModule } from '@angular/core';
import { TestTreeComponent } from './test-tree.component';
import { TestTreeItemComponent } from './test-tree-item/test-tree-item.component';

import { TreeModule } from '@circlon/angular-tree-component';

@NgModule({
  imports: [TreeModule],
  declarations: [
    TestTreeComponent,
    TestTreeItemComponent
  ]
})
export class TestTreeModule{}
