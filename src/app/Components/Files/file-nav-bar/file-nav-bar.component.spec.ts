import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNavBarComponent } from './file-nav-bar.component';

describe('FileNavBarComponent', () => {
  let component: FileNavBarComponent;
  let fixture: ComponentFixture<FileNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileNavBarComponent]
    });
    fixture = TestBed.createComponent(FileNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
