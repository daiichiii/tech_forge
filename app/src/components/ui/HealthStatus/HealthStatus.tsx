import React from 'react';
import type { HealthResponse } from '@/types/api';

interface HealthStatusProps {
  health: HealthResponse | null;
  loading: boolean;
  error: string | null;
  onRefresh?: () => void;
}

export const HealthStatus: React.FC<HealthStatusProps> = ({
  health,
  loading,
  error,
  onRefresh,
}) => {
  if (loading) {
    return <div>ヘルスチェック中...</div>;
  }

  if (error) {
    return (
      <div style={{ 
        color: 'red', 
        padding: '1rem', 
        border: '1px solid red', 
        borderRadius: '4px' 
      }}>
        <div>❌ {error}</div>
        {onRefresh && (
          <button 
            onClick={onRefresh}
            style={{
              marginTop: '0.5rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: 'transparent',
              border: '1px solid red',
              color: 'red',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            再試行
          </button>
        )}
      </div>
    );
  }

  if (!health) {
    return <div>ヘルスステータスを取得できませんでした</div>;
  }

  return (
    <div style={{ 
      color: 'green', 
      padding: '1rem', 
      border: '1px solid green', 
      borderRadius: '4px' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: '0 0 1rem 0' }}>✅ システムステータス</h3>
        {onRefresh && (
          <button
            onClick={onRefresh}
            style={{
              padding: '0.25rem 0.5rem',
              backgroundColor: 'transparent',
              border: '1px solid green',
              color: 'green',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            更新
          </button>
        )}
      </div>
      <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
        <li>ステータス: {health.status}</li>
        <li>環境: {health.environment}</li>
        <li>バージョン: {health.version}</li>
        <li>タイムスタンプ: {new Date(health.timestamp).toLocaleString()}</li>
      </ul>
    </div>
  );
};