import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Launch } from "../../../store/actions/launch.actions";
import { NGXSWindow, WindowNames } from "../../../shared/constants/window-names.constant";

@Component({
  selector: 'app-ngxs-window',
  templateUrl: './ngxs-window.component.html',
  styleUrls: ['./ngxs-window.component.sass']
})
export class NgxsWindowComponent {
  ngxsWindow: WindowNames = NGXSWindow;
  ngxsForm = new FormGroup({
    startMenuTitle: new FormControl('', { nonNullable: true })
  });
  constructor(private store: Store) {
    this.ngxsForm.controls.startMenuTitle.setValidators(Validators.required);
  }

  dispatchAction() {
    this.store.dispatch(new Launch.ChangeStartMenuTitle(this.ngxsForm.controls.startMenuTitle.getRawValue()))
      .subscribe(() => {
        this.ngxsForm.reset();
      })
  }
}
