import { useMutation } from '@apollo/client';
import { UPDATE_WALTH_BY_PK } from 'services/mutations/healthSummary';
import { GET_ALL_HEALTH_SUMMARY } from 'services/queries/healthSummary';

const useUpdateWealthSummary = () => {
  const [EditWealthOne] = useMutation(UPDATE_WALTH_BY_PK, {
    refetchQueries: [GET_ALL_HEALTH_SUMMARY, 'GetAllHealthSummary'],
  });

  return {
    EditWealthOne,
  };
};

export default useUpdateWealthSummary;
