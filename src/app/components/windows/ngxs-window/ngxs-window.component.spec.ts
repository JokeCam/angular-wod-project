import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsWindowComponent } from './ngxs-window.component';

describe('NgxsWindowComponent', () => {
  let component: NgxsWindowComponent;
  let fixture: ComponentFixture<NgxsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxsWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
