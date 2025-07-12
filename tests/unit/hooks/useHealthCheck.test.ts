import { renderHook, waitFor } from '@testing-library/react';
import { useHealthCheck } from '@/hooks/useHealthCheck';
import { healthApi } from '@/services/healthApi';
import healthData from '../../fixtures/healthData.json';

// healthApiをモック
jest.mock('@/services/healthApi');
const mockedHealthApi = healthApi as jest.Mocked<typeof healthApi>;

describe('useHealthCheck', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('初期状態はローディング中である', () => {
    mockedHealthApi.check.mockImplementation(() => new Promise(() => {})); // 永続的なpending

    const { result } = renderHook(() => useHealthCheck());

    expect(result.current.loading).toBe(true);
    expect(result.current.health).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it('正常にヘルス情報を取得する', async () => {
    mockedHealthApi.check.mockResolvedValue(healthData.healthy);

    const { result } = renderHook(() => useHealthCheck());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.health).toEqual(healthData.healthy);
    expect(result.current.error).toBe(null);
  });

  it('APIエラー時にエラー状態を設定する', async () => {
    mockedHealthApi.check.mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useHealthCheck());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.health).toBe(null);
    expect(result.current.error).toBe('APIへの接続に失敗しました');
  });

  it('refetch で再度API呼び出しを行う', async () => {
    mockedHealthApi.check.mockResolvedValue(healthData.healthy);

    const { result } = renderHook(() => useHealthCheck());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // refetch実行
    mockedHealthApi.check.mockResolvedValue(healthData.unhealthy);
    await result.current.refetch();

    expect(mockedHealthApi.check).toHaveBeenCalledTimes(2);
    expect(result.current.health).toEqual(healthData.unhealthy);
  });
});