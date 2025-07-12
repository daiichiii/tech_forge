import React from 'react';
import { render, screen, fireEvent } from '../../../setup/test-utils';
import { HealthStatus } from '@/components/ui/HealthStatus/HealthStatus';
import healthData from '../../../fixtures/healthData.json';

describe('HealthStatus', () => {
  it('ローディング状態を表示する', () => {
    render(
      <HealthStatus
        health={null}
        loading={true}
        error={null}
      />
    );

    expect(screen.getByText('ヘルスチェック中...')).toBeInTheDocument();
  });

  it('エラー状態を表示する', () => {
    const mockRefresh = jest.fn();

    render(
      <HealthStatus
        health={null}
        loading={false}
        error="APIへの接続に失敗しました"
        onRefresh={mockRefresh}
      />
    );

    expect(screen.getByText('❌ APIへの接続に失敗しました')).toBeInTheDocument();
    
    const retryButton = screen.getByText('再試行');
    fireEvent.click(retryButton);
    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });

  it('正常なヘルス情報を表示する', () => {
    const mockRefresh = jest.fn();

    render(
      <HealthStatus
        health={healthData.healthy}
        loading={false}
        error={null}
        onRefresh={mockRefresh}
      />
    );

    expect(screen.getByText('✅ システムステータス')).toBeInTheDocument();
    expect(screen.getByText('ステータス: ok')).toBeInTheDocument();
    expect(screen.getByText('環境: test')).toBeInTheDocument();
    expect(screen.getByText('バージョン: 1.0.0')).toBeInTheDocument();

    const refreshButton = screen.getByText('更新');
    fireEvent.click(refreshButton);
    expect(mockRefresh).toHaveBeenCalledTimes(1);
  });

  it('onRefreshが提供されていない場合、ボタンを表示しない', () => {
    render(
      <HealthStatus
        health={healthData.healthy}
        loading={false}
        error={null}
      />
    );

    expect(screen.queryByText('更新')).not.toBeInTheDocument();
  });
});