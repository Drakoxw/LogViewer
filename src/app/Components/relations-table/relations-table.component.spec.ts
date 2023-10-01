import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationsTableComponent } from './relations-table.component';

describe('RelationsTableComponent', () => {
  let component: RelationsTableComponent;
  let fixture: ComponentFixture<RelationsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelationsTableComponent]
    });
    fixture = TestBed.createComponent(RelationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
