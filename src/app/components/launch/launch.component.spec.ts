import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LaunchComponent } from './launch.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LaunchComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LaunchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-wod-project'`, () => {
    const fixture = TestBed.createComponent(LaunchComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-wod-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LaunchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-wod-project app is running!');
  });
});
