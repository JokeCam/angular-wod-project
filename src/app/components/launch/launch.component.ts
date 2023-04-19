import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.sass']
})
export class LaunchComponent {

  isStartMenuButtonToggled = false;
  currentTime = new Date();
  constructor() {}

  toggleStartMenuButton() {
    this.isStartMenuButtonToggled = !this.isStartMenuButtonToggled;
  }
}
