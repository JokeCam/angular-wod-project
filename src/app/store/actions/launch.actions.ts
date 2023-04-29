export namespace Launch {
  export class ChangeStartMenuTitle {
    static readonly type = '[Launch] ChangeStartMenuTitle';
    constructor(public startMenuTitle: string) {}
  }
}
