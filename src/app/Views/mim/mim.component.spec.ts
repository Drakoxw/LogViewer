import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimComponent } from './mim.component';

describe('MimComponent', () => {
  let component: MimComponent;
  let fixture: ComponentFixture<MimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MimComponent]
    });
    fixture = TestBed.createComponent(MimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
