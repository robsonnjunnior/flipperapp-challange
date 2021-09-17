import { gql } from '@apollo/client';

const GET_ALL_HEALTH_SUMMARY = gql`
  query GetAllHealthSummary {
    wealthSummary {
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
