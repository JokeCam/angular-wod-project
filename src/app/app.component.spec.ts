import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxsModule, StateStream, Store } from "@ngxs/store";
import { AppState } from "./store/state/app.state";
import { WindowComponent } from "./shared/components/window/window.component";
import { AppRoutingModule } from "./app-routing.module";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        RouterTestingModule,
        NgxsModule.forRoot(AppState)
      ],
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
