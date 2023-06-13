import { Location } from "@angular/common";
import { TestBed, fakeAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from "@angular/router";
import { LaunchComponent } from "./components/launch/launch.component";
import { NgxsWindowComponent } from "./components/windows/ngxs-window/ngxs-window.component";
import { SpreadsheetWindowComponent } from "./components/windows/spreadsheet-window/spreadsheet-window.component";

const testRoutes: Routes = [
  { path: 'launch', component: LaunchComponent },
  { path: 'ngxs-window', component: NgxsWindowComponent },
  { path: 'spreadsheets-window', component: SpreadsheetWindowComponent }
];

describe("App routing", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(testRoutes)],
      declarations: [LaunchComponent, NgxsWindowComponent, SpreadsheetWindowComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('navigate to "launch" redirects you to "/launch"', fakeAsync(() => {
    router.navigate(["launch"]).then(() => {
      expect(location.path()).toBe("/launch");
    });
  }));

  it('navigate to "ngxs-window" redirects you to "/ngxs-window"', fakeAsync(() => {
    router.navigate(["ngxs-window"]).then(() => {
      expect(location.path()).toBe("/ngxs-window");
    });
  }));

  it('navigate to "spreadsheets-window" redirects you to "/spreadsheets-window"', fakeAsync(() => {
    router.navigate(["spreadsheets-window"]).then(() => {
      expect(location.path()).toBe("/spreadsheets-window");
    });
  }));
});
