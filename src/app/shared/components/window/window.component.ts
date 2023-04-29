import { Component } from '@angular/core';
import { Store } from "@ngxs/store";
import { Launch } from "../../../store/actions/launch.actions";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent {

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
