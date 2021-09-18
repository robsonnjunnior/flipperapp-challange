import { gql } from '@apollo/client';

const DASHBOARD_SUMMARY = gql`
  query DashboardSummary {
    wealthSummary_aggregate {
      aggregate {
        sum {
          cdi
          gain
          profitability
          total
        }
        avg {
          cdi
          gain
          profitability
          total
        }
      }
    }
  }
`;

export { DASHBOARD_SUMMARY };
