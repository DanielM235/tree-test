import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarItemComponent } from './left-sidebar-item.component';

describe('LeftSidebarItemComponent', () => {
  let component: LeftSidebarItemComponent;
  let fixture: ComponentFixture<LeftSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSidebarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
