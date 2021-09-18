import { IWealthSummary } from 'models/wealthSummary/wealSummary.model';

export interface IFormWealth {
  open: boolean;
  mode: string;
  onClose: () => void;
  onCancel: () => void;
  editData: IWealthSummary | null;
}
