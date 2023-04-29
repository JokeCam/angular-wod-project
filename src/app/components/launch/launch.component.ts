import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { LaunchStateModel } from "../../store/models/launch-state.model";
import { Store } from "@ngxs/store";

@Component({
  selector: 'app-root',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.sass']
})
export class LaunchComponent {

  isStartMenuButtonToggled = false;
  currentTime = new Date();
  startMenuTitle$: Observable<LaunchStateModel["startMenuTitle"]>;
  constructor(store: Store) {
    this.startMenuTitle$ = store.select(state => state.launch.startMenuTitle);
  }

  toggleStartMenuButton() {
    this.isStartMenuButtonToggled = !this.isStartMenuButtonToggled;
  }
}
