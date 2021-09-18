import { useQuery } from '@apollo/client';
import { DASHBOARD_SUMMARY } from 'services/queries/dashboardSummary';

const useWealthSummary = () => {
  const { loading, error, data } = useQuery(DASHBOARD_SUMMARY);
  return {
    loading,
    error,
    data,
  };
};

export default useWealthSummary;
