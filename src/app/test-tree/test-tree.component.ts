import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TestTreeNode } from './test-tree-node';
import { Identifiable } from '../classes/interfaces/indentifiable.interface';
import { of } from 'rxjs';
import { ITreeOptions, TreeComponent, TreeNode } from '@circlon/angular-tree-component';
import { assign, merge } from 'lodash';
import { unsubscribe } from '../global/utils/rxjs.utils';
import { NodeSubscription } from './node-subscription';

@Component({
  selector: 'app-test-tree',
  templateUrl: './test-tree.component.html',
  styleUrls: ['./test-tree.component.less']
})
export class TestTreeComponent implements OnInit {
  loadChildDepth = 2;
  private readonly subs: NodeSubscription[] = [];

  @Input()
  node: TestTreeNode | undefined;
  @Input()
  nodes: TestTreeNode[] = [];

  @Input() loadChildren = (identifiable: Identifiable, depth = 2) => of(identifiable);

  @Input() updateItem = (doc: Identifiable, fullview = false) => of(doc);

  options: ITreeOptions = {
    getChildren: (node: TreeNode) => {
      console.log('node', node);
      if (!node.data.children?.length) {
        return this.loadChildren(node.data, this.loadChildDepth).toPromise().then(doc => {
          merge(node.data, doc);
          return node.data.children;
        });
      } else {
        return node.data.children;
      }
    },
    actionMapping: {
      mouse: {
        click: (tree: TreeNode, node: TreeNode, $event: unknown) => {
          // ignore click event
        },
      }
    },
    dropSlotHeight: 3,
    levelPadding: 15,
    useVirtualScroll: false,
    nodeHeight: 29,
    animateExpand: true
  };

  @ViewChild('tree') treeComponent: TreeComponent | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  initContent(): void {
    if (!this.treeComponent) {
      return;
    }

    // this.treeComponent.treeModel.update();
    const firstNode: TreeNode = this.treeComponent.treeModel.getFirstRoot();
    if (firstNode) {
      firstNode.expand();
      this.treeComponent.treeModel.update();
    }

  }

  onNodeDestroy(node: TreeNode) {
    const found = this.subs.find(obj => obj.id === node.data.id);
    if (found) {
      unsubscribe(found);
    }
  }

  onNodeUpdate(node: TreeNode) {
    this.onNodeDestroy(node);

    const sub = this.updateItem(node.data, true).subscribe(doc => {
      assign(node.data, doc);
    });
    this.subs.push(Object.assign(new NodeSubscription(), sub, { id: node.data.id }));
  }

}
