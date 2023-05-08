import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { LaunchStateModel } from "../../store/models/launch-state.model";
import { Store } from "@ngxs/store";
import { WindowTypesEnum } from "../../shared/enums/window-types.enum";
import { Launch } from "../../store/actions/launch.actions";
import { ExcelWindow, NGXSWindow } from "../../shared/constants/window-names.constant";
import OpenWindow = Launch.OpenWindow;

@Component({
  selector: 'app-root',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.sass']
})
export class LaunchComponent implements OnInit {
  windowTypesEnum = WindowTypesEnum;
  currentTime = new Date();
  startMenuTitle$: Observable<LaunchStateModel["startMenuTitle"]>;
  openedWindows$: Observable<LaunchStateModel["openedWindows"]>;
  isStartMenuButtonToggled = false;

  openedWindows = {
    ngxsWindow: false,
    excelWindow: false,
  }
  subscritions = new Subscription();
  constructor(
    private store: Store
  ) {
    this.startMenuTitle$ = store.select(state => state.launch.startMenuTitle);
    this.openedWindows$ = store.select(state => state.launch.openedWindows);
  }

  ngOnInit() {
    this.subscritions.add(
      this.openedWindows$.subscribe((openedWindows) => {
        this.openedWindows = openedWindows;
      })
    )
  }

  toggleStartMenuButton() {
    this.isStartMenuButtonToggled = !this.isStartMenuButtonToggled;
  }

  closeStartMenu() {
    this.isStartMenuButtonToggled = false;
  }

  handleStartUpMenuClick(windowsNumber: WindowTypesEnum) {
    this.closeStartMenu();

    switch (windowsNumber) {
      case WindowTypesEnum.NGXS:
        this.store.dispatch(new OpenWindow(NGXSWindow))
        break;
      case WindowTypesEnum.Excel:
        this.store.dispatch(new OpenWindow(ExcelWindow))
        break;
    }
  }
}
