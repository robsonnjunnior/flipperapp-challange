import { gql } from '@apollo/client';

const GET_ALL_HEALTH_SUMMARY = gql`
  query GetAllHealthSummary {
    wealthSummary(order_by: { id: asc }) {
      cdi
      gain
      hasHistory
      id
      profitability
      total
    }
  }
`;

export { GET_ALL_HEALTH_SUMMARY };
