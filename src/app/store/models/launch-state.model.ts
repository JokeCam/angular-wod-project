export interface LaunchStateModel {
  startMenuTitle: string;
  windowZIndex: number;
  openedWindows: {
    ngxsWindow: boolean,
    excelWindow: boolean
  };
}
