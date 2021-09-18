import { useMutation } from '@apollo/client';
import { DELETE_WEALTH_BY_PK } from 'services/mutations/healthSummary';
import { GET_ALL_HEALTH_SUMMARY } from 'services/queries/healthSummary';

const useDeleteWealthSummary = () => {
  const [DeleteWealthByPk] = useMutation(DELETE_WEALTH_BY_PK, {
    refetchQueries: [GET_ALL_HEALTH_SUMMARY, 'GetAllHealthSummary'],
  });

  return {
    DeleteWealthByPk,
  };
};

export default useDeleteWealthSummary;
