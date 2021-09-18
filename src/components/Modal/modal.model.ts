export interface IModal {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}
