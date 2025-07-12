import apiClient from './apiClient';
import type { HealthResponse } from '@/types/api';

export const healthApi = {
  // ヘルスチェック
  check: async (): Promise<HealthResponse> => {
    const response = await apiClient.get('/health');
    return response.data;
  },
};

export default healthApi;