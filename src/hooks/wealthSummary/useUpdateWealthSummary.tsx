import { useMutation } from '@apollo/client';
import { UPDATE_WALTH_BY_PK } from 'services/mutations/healthSummary';
import { GET_ALL_HEALTH_SUMMARY } from 'services/queries/healthSummary';

const useUpdateWealthSummary = () => {
  const [EditWealthOne, { data, loading }] = useMutation(UPDATE_WALTH_BY_PK, {
    refetchQueries: [GET_ALL_HEALTH_SUMMARY, 'GetAllHealthSummary'],
  });

  const successEdit = data?.update_wealthSummary_by_pk ? true : false;

  return {
    EditWealthOne,
    loadingEdit: loading,
    successEdit,
  };
};

export default useUpdateWealthSummary;
