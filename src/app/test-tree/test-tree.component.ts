import { Component, Input, OnInit } from '@angular/core';
import { Documentation } from '../classes/documentation';

@Component({
  selector: 'app-test-tree',
  templateUrl: './test-tree.component.html',
  styleUrls: ['./test-tree.component.less']
})
export class TestTreeComponent implements OnInit {

  @Input()
  documentations: Documentation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
