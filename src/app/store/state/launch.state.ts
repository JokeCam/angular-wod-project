import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { LaunchStateModel } from "../models/launch-state.model";
import { Launch } from "../actions/launch.actions";

@State<LaunchStateModel>({
  name: 'launch',
  defaults: {
    startMenuTitle: 'start',
  }
})
@Injectable()
export class LaunchState {
  @Action(Launch.ChangeStartMenuTitle)
  changeStartMenuTitle(ctx: StateContext<LaunchStateModel>, action: Launch.ChangeStartMenuTitle) {
    ctx.patchState({
      startMenuTitle: action.startMenuTitle,
    })
  }
}
