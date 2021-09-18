/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITooltipMenuOptions {
  label: string;
  action: (param?: any) => void;
}
export interface ITooltipMenu {
  options: ITooltipMenuOptions[];
}
