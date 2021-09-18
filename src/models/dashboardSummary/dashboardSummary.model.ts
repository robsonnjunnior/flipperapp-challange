interface IReturnObject {
  cdi: number;
  gain: number;
  profitability: number;
  total: number;
}

interface IAggregate {
  sum: IReturnObject;
  avg: IReturnObject;
}

export interface IDashboardSummary {
  aggregate: IAggregate;
}
