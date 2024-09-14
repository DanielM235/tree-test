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
}
