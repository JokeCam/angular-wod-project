import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetWindowComponent } from './spreadsheet-window.component';

describe('SpreadsheetWindowComponent', () => {
  let component: SpreadsheetWindowComponent;
  let fixture: ComponentFixture<SpreadsheetWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpreadsheetWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpreadsheetWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
