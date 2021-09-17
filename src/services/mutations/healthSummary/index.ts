import { gql } from '@apollo/client';

const ADD_WEALTH_ONE = gql`
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
`;

const DELETE_WEALTH_BY_PK = gql`
  mutation DeleteWealthByPk($id: Int!) {
    delete_wealthSummary_by_pk(id: $id) {
      id
    }
  }
`;

export { ADD_WEALTH_ONE, DELETE_WEALTH_BY_PK };
