import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from "@ngxs/store";
import { AppState } from "../../store/state/app.state";
import { Launch } from "../../store/actions/launch.actions";
import ChangeStartMenuTitle = Launch.ChangeStartMenuTitle;
import OpenWindow = Launch.OpenWindow;
import IncreaseZIndex = Launch.IncreaseZIndex
import { ExcelWindow, NGXSWindow } from "../../shared/constants/window-names.constant";

describe('AppState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot(AppState)]
    });

    store = TestBed.inject(Store);
  });

  it('change start menu button title to "Test"', () => {
    store.dispatch(new ChangeStartMenuTitle('Test'));

    const startMenuTitle = store.selectSnapshot(state => state.launch.startMenuTitle);
    expect(startMenuTitle).toBe('Test');
  });

  it('sets all windows open', () => {
    store.dispatch(new OpenWindow(NGXSWindow));
    store.dispatch(new OpenWindow(ExcelWindow));

    const ngxsWindow = store.selectSnapshot(state => state.launch.openedWindows.ngxsWindow);
    const excelWindow = store.selectSnapshot(state => state.launch.openedWindows.excelWindow);
    expect(ngxsWindow && excelWindow).toBeTruthy();
  });

  it('sets ngxs window open', () => {
    store.dispatch(new OpenWindow(NGXSWindow));

    const ngxsWindow = store.selectSnapshot(state => state.launch.openedWindows.ngxsWindow);
    expect(ngxsWindow).toBeTruthy();
  });

  it('sets spreadsheet window open', () => {
    store.dispatch(new OpenWindow(ExcelWindow));

    const excelWindow = store.selectSnapshot(state => state.launch.openedWindows.excelWindow);
    expect(excelWindow).toBeTruthy();
  });

  it('increases global z-index by one', () => {
    store.dispatch(new IncreaseZIndex());

    const zIndex = store.selectSnapshot(state => state.launch.windowZIndex);
    expect(zIndex).toBe(2);
  });
});
