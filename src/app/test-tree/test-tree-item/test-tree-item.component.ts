import { Component, Input, OnInit } from '@angular/core';
import { InformationMap } from '../../classes/information-map';
import { TreeNode } from '@circlon/angular-tree-component';

@Component({
  selector: 'app-test-tree-item',
  templateUrl: './test-tree-item.component.html',
  styleUrls: ['./test-tree-item.component.less']
})
export class TestTreeItemComponent implements OnInit {
  @Input() index: number | undefined = undefined;
  @Input() informationMap: InformationMap | undefined = undefined;
  @Input() node: TreeNode | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return 'test';
  }

  getStyle() {
    if (this.node) {
      let paddingLeft = parseInt(this.node.getNodePadding(), 10);
      if (!this.node.hasChildren) {
        paddingLeft = paddingLeft + 20;
      }
      // Add extra padding for translation warning icon if necessary
      paddingLeft += paddingLeft < 20 && !this.isRoot() ? 10 : 0;

      return {'padding-left': `${paddingLeft}px`};
    }
    return null;
  }

  getIcon() {
    if (this.isCollapsed()) {
      return 'fa-chevron-right';
    } else {
      return 'fa-chevron-down';
    }
  }

  isCollapsed(): boolean {
    return !!this.node?.isCollapsed;
  }

  isRoot() {
    return !!this.node && this.node.isRoot;//this.documentation.typeDocumentation === TypeDocumentation.ROOT;
  }
}
