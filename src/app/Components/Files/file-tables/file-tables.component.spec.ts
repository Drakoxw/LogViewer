import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTablesComponent } from './file-tables.component';

describe('FileTablesComponent', () => {
  let component: FileTablesComponent;
  let fixture: ComponentFixture<FileTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileTablesComponent]
    });
    fixture = TestBed.createComponent(FileTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
