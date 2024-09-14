import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Identifiable } from '../../classes/interfaces/indentifiable.interface';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.less']
})
export class LeftSidebarComponent implements OnInit {

  @Input()
  groups: Identifiable[] = [];
  @Input()
  selectedImId: number | undefined;

  @Output()
  activeChange: EventEmitter<number | undefined> = new EventEmitter(undefined);

  constructor(
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.informationMaps = this.route.snapshot.data['informationMaps'];
    // this.informationMaps.forEach(im => {
    //   im.$isOpen = im.id === this.initiallyOpen;
    // });
  }

  isOpen(im: Identifiable): boolean {
    return im.id === this.selectedImId;
  }

}
