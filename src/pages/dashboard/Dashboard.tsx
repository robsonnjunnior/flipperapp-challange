/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, useMutation, gql } from '@apollo/client';
import { v4 as uuid } from 'uuid';
import { Card, Button } from 'components';
import { Container } from './styles';
import { IWealthSummary } from 'models/wealthSummary/wealSummary.model';

import { GET_ALL_HEALTH_SUMMARY } from 'services/queries/healthSummary';
import { DELETE_WEALTH_BY_PK } from 'services/mutations/healthSummary';

const object: Omit<IWealthSummary, 'id'> = {
  cdi: 1.1,
  gain: 1.11,
  hasHistory: true,
  profitability: 1.111,
  total: 11111.11,
};

/* const ADD_WEALTH_ONE = gql`
mutation AddWealthOne($object: wealthSummary_insert_input!) {
  insert_wealthSummary_one(object: $object) {
      cdi
      gain
      hasHistory
      id
      profitability
      total
      }
  }
`; */

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_ALL_HEALTH_SUMMARY);
  const [DeleteWealthByPk] = useMutation(DELETE_WEALTH_BY_PK, {
    variables: {
      id: 3,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { wealthSummary } = data;

  return (
    <>
      <Button label="Adicionar resumo" handleClick={() => DeleteWealthByPk()} />
      <Container>
        {wealthSummary?.map((data: IWealthSummary) => (
          <Card key={uuid()} title="Seu resumo" data={data} />
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
