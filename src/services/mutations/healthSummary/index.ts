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

const UPDATE_WALTH_BY_PK = gql`
  mutation EditWealthOne(
    $pk_columns: wealthSummary_pk_columns_input!
    $_set: wealthSummary_set_input!
  ) {
    update_wealthSummary_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;

export { ADD_WEALTH_ONE, DELETE_WEALTH_BY_PK, UPDATE_WALTH_BY_PK };
