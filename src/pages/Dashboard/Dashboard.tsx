import useDashboardSummary from 'hooks/dashboardSummary/useDashboardSummary';
import { IDashboardSummary } from 'models/dashboardSummary/dashboardSummary.model';

import { currencyFormat, percentFormat } from 'utils/number';

import {
  Container,
  SummaryCard,
  Header,
  ProfiabilityInfo,
  ItemInfo,
} from './styles';

const Dashboard = () => {
  const { error, loading, data } = useDashboardSummary();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { aggregate }: IDashboardSummary = data.wealthSummary_aggregate;
  const { avg, sum } = aggregate;

  return (
    <Container>
      <SummaryCard>
        <ProfiabilityInfo>
          <Header>
            <p>Média dos valores</p>
          </Header>
          <ItemInfo>
            <p>CDI</p>
            <p>{percentFormat(avg.cdi)}</p>
          </ItemInfo>

          <ItemInfo>
            <p>Ganho/mês</p>
            <p>{currencyFormat(avg.gain)}</p>
          </ItemInfo>
          <ItemInfo>
            <p>Rentabilidade/mês</p>
            <p>{percentFormat(avg.profitability)}</p>
          </ItemInfo>
          <ItemInfo>
            <p>Valor investido</p>
            <p>{currencyFormat(avg.total)}</p>
          </ItemInfo>
        </ProfiabilityInfo>
      </SummaryCard>

      <SummaryCard>
        <ProfiabilityInfo>
          <Header>
            <p>Soma dos valores</p>
          </Header>
          <ItemInfo>
            <p>CDI</p>
            <p>{percentFormat(sum.cdi)}</p>
          </ItemInfo>

          <ItemInfo>
            <p>Ganho/mês</p>
            <p>{currencyFormat(sum.gain)}</p>
          </ItemInfo>
          <ItemInfo>
            <p>Rentabilidade/mês</p>
            <p>{percentFormat(sum.profitability)}</p>
          </ItemInfo>
          <ItemInfo>
            <p>Valor investido</p>
            <p>{currencyFormat(sum.total)}</p>
          </ItemInfo>
        </ProfiabilityInfo>
      </SummaryCard>
    </Container>
  );
};

export default Dashboard;
