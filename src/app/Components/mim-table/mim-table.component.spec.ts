import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimTableComponent } from './mim-table.component';

describe('MimTableComponent', () => {
  let component: MimTableComponent;
  let fixture: ComponentFixture<MimTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MimTableComponent]
    });
    fixture = TestBed.createComponent(MimTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
