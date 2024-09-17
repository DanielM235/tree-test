import { Component, Input, OnInit } from '@angular/core';
import { Identifiable } from '../../../classes/interfaces/indentifiable.interface';
import { combineLatest, Observable, of } from 'rxjs';
import { selectActiveImId } from '../../../store/selectors/tree.selectors';
import {
  selectDocumentation,
  selectDocumentations,
  selectInformationMaps
} from '../../../store/selectors/edition.selectors';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Documentation } from '../../../classes/documentation';
import { DocumentationService } from '../../../global/services/documentation.service';

@Component({
  selector: 'app-left-sidebar-item',
  templateUrl: './left-sidebar-item.component.html',
  styleUrls: ['./left-sidebar-item.component.less']
})
export class LeftSidebarItemComponent implements OnInit {

  documentation: Documentation | undefined;
  documentations: Documentation[] = [];

  @Input()
  group: Identifiable | undefined;
  @Input()
  isOpen = false;

  constructor(readonly store: Store, private readonly docService: DocumentationService) {
    combineLatest([
      store.select(selectDocumentation),
      store.select(selectDocumentations)
    ]).pipe(
      tap(([documentation, documentations]) => {
        this.documentation = documentation;
        this.documentations = documentations;
      })
    ).subscribe();
  }

  ngOnInit(): void {
  }

  populateChildren(documentation: Identifiable, depth = 2): Observable<Identifiable> {
    return (() => {
      return this.group?.id ? this.docService.getTree(this.group.id, documentation.id, depth) : of(new Documentation());
    })();
  }

}
