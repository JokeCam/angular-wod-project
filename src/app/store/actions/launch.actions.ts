import { WindowNames } from "../../shared/constants/window-names.constant";

export namespace Launch {
  export class IncreaseZIndex {
    static readonly type = '[Launch] IncreaseZIndex';
    constructor() {}
  }
  export class ChangeStartMenuTitle {
    static readonly type = '[Launch] ChangeStartMenuTitle';
    constructor(public startMenuTitle: string) {}
  }
  export class OpenWindow {
    static readonly type = '[Launch] OpenWindow';
    constructor(public windowToOpen: WindowNames) {}
  }
  export class CloseWindow {
    static readonly type = '[Launch] CloseWindow';
    constructor(public windowToClose: WindowNames) {}
  }
}
