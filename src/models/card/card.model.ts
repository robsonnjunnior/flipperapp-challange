import { IWealthSummary } from '../wealthSummary/wealSummary.model';

export interface ICard {
  title: string;
  data: IWealthSummary;
  handleDelete: (id: number) => void;
  handleEdit: (data: IWealthSummary) => void;
}
