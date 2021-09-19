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

import { PacmanLoader } from 'react-spinners';

const Dashboard = () => {
  const { error, loading, data } = useDashboardSummary();

  if (loading)
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      >
        <PacmanLoader color="#3b5cb8" size={40} margin={3} />
      </div>
    );
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
