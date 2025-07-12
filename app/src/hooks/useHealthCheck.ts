import { useState, useEffect } from 'react';
import { healthApi } from '@/services/healthApi';
import type { HealthResponse } from '@/types/api';

interface UseHealthCheckReturn {
  health: HealthResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useHealthCheck = (): UseHealthCheckReturn => {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await healthApi.check();
      setHealth(response);
    } catch (err) {
      setError('APIへの接続に失敗しました');
      setHealth(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return {
    health,
    loading,
    error,
    refetch: checkHealth,
  };
};