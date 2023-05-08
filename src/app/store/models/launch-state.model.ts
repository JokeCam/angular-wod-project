export interface LaunchStateModel {
  startMenuTitle: string;
  openedWindows: {
    ngxsWindow: boolean,
    excelWindow: boolean
  };
}
