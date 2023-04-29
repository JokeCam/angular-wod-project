import { Component, OnInit } from '@angular/core';
import { Select, StateContext, Store } from "@ngxs/store";
import { Launch } from "../../../store/actions/launch.actions";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, withLatestFrom } from "rxjs";
import { LaunchState } from "../../../store/state/launch.state";
import { LaunchStateModel } from "../../../store/models/launch-state.model";

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent implements OnInit {

  ngxsForm = new FormGroup({
    startMenuTitle: new FormControl('', { nonNullable: true })
  });
  constructor(private store: Store) {
    this.ngxsForm.controls.startMenuTitle.setValidators(Validators.required);
  }

  ngOnInit() {
  }

  dispatchAction() {
    this.store.dispatch(new Launch.ChangeStartMenuTitle(this.ngxsForm.controls.startMenuTitle.getRawValue()))
      .subscribe(() => {
        this.ngxsForm.reset();
      })
  }
}
