import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTreeItemComponent } from './test-tree-item.component';

describe('TestTreeItemComponent', () => {
  let component: TestTreeItemComponent;
  let fixture: ComponentFixture<TestTreeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTreeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
