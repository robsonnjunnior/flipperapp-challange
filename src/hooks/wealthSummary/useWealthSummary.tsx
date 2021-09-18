import { useQuery } from '@apollo/client';
import { GET_ALL_HEALTH_SUMMARY } from 'services/queries/healthSummary';

const useWealthSummary = () => {
  const { loading, error, data } = useQuery(GET_ALL_HEALTH_SUMMARY);

  return {
    loading,
    error,
    data,
  };
};

export default useWealthSummary;
