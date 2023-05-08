import { Component, Input } from '@angular/core';
import { NGXSWindow, WindowNames } from "../../constants/window-names.constant";
import { Store } from "@ngxs/store";
import { Launch } from "../../../store/actions/launch.actions";
import CloseWindow = Launch.CloseWindow;

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent {
  @Input() title: string;
  @Input() windowName: WindowNames;

  constructor(
    private store: Store,
  ) {
    this.title = '';
    this.windowName = NGXSWindow;
  }


  closeWindow() {
    this.store.dispatch(new CloseWindow(this.windowName));
  }
}
