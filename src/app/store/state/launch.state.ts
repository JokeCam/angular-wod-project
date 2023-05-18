import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { LaunchStateModel } from "../models/launch-state.model";
import { Launch } from "../actions/launch.actions";

@State<LaunchStateModel>({
  name: 'launch',
  defaults: {
    startMenuTitle: 'start',
    openedWindows: {
      ngxsWindow: false,
      excelWindow: false,
    }
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

  @Action(Launch.OpenWindow)
  openWindow(ctx: StateContext<LaunchStateModel>, action: Launch.OpenWindow) {
    const state = ctx.getState();
    const newState = { ...state.openedWindows }
    if (Object.keys(newState).indexOf(action.windowToOpen) !== -1) {
      newState[action.windowToOpen] = true;
    }
    ctx.patchState({
      openedWindows: {...newState }
    })
  }

  @Action(Launch.CloseWindow)
  closeWindow(ctx: StateContext<LaunchStateModel>, action: Launch.CloseWindow) {
    const state = ctx.getState();
    const newState = { ...state.openedWindows }
    if (Object.keys(newState).indexOf(action.windowToClose) !== -1) {
      newState[action.windowToClose] = false;
    }
    ctx.patchState({
      openedWindows: {...newState}
    })
  }
}
