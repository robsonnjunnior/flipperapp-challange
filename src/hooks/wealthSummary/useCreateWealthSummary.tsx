import { useMutation } from '@apollo/client';
import { ADD_WEALTH_ONE } from 'services/mutations/healthSummary';
import { GET_ALL_HEALTH_SUMMARY } from 'services/queries/healthSummary';

const useCreateWealthSummary = () => {
  const [AddWealthOne, { data, loading }] = useMutation(ADD_WEALTH_ONE, {
    refetchQueries: [GET_ALL_HEALTH_SUMMARY, 'GetAllHealthSummary'],
  });
  const successAdd = data?.insert_wealthSummary_one ? true : false;

  return {
    AddWealthOne,
    loadingAdd: loading,
    successAdd,
  };
};

export default useCreateWealthSummary;
