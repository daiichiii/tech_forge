import React from 'react';
import { useHealthCheck } from '@/hooks/useHealthCheck';
import { HealthStatus } from './HealthStatus';

export const HealthStatusContainer: React.FC = () => {
  const { health, loading, error, refetch } = useHealthCheck();

  return (
    <HealthStatus
      health={health}
      loading={loading}
      error={error}
      onRefresh={refetch}
    />
  );
};