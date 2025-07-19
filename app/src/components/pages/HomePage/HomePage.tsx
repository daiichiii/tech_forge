import React from 'react';
import HealthStatus from '@/components/ui/HealthStatus';
import './HomePage.css';

interface AppInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  completed: boolean;
  route?: string;
}

interface HomePageProps {
  title?: string;
  description?: string;
}

const TECH_FORGE_APPS: AppInfo[] = [
  {
    id: 'othello',
    name: 'オセロゲーム',
    description: 'マルチプレイヤー対応のターン制戦略ゲーム',
    icon: '⚫',
    category: 'ゲーム',
    completed: false,
    route: '/othello'
  },
  {
    id: 'study',
    name: '勉強アプリ',
    description: '進捗追跡機能付き学習管理システム',
    icon: '📚',
    category: '学習',
    completed: false,
    route: '/study'
  },
  {
    id: 'wall-bounce',
    name: '壁当てゲーム',
    description: 'アニメーション・物理演算学習',
    icon: '🏓',
    category: 'ゲーム',
    completed: false,
    route: '/wall-bounce'
  },
  {
    id: 'x-auto-post',
    name: 'X自動ポスト',
    description: '外部API連携学習',
    icon: '🐦',
    category: 'API連携',
    completed: false
  },
  {
    id: 'youtube-tools',
    name: 'YouTube関連機能',
    description: '複雑なAPI学習',
    icon: '📹',
    category: 'API連携',
    completed: false
  },
  {
    id: 'shogi',
    name: '将棋',
    description: '複雑なゲームロジック',
    icon: '🎯',
    category: 'ゲーム',
    completed: false
  }
];

function AppCard({ app, onClick }: { app: AppInfo; onClick: (appId: string) => void }) {
  return (
    <div className="app-card" onClick={() => onClick(app.id)}>
      {!app.completed && (
        <div className="app-card-badge">
          開発中
        </div>
      )}
      
      <div className="app-card-icon">
        {app.icon}
      </div>
      
      <h3 className="app-card-title">
        {app.name}
      </h3>
      
      <p className="app-card-description">
        {app.description}
      </p>
      
      <div className="app-card-category">
        {app.category}
      </div>
    </div>
  );
}

export const HomePage: React.FC<HomePageProps> = ({
  title = "Tech Forge",
  description = "100アプリケーション開発プロジェクト"
}) => {
  const handleAppClick = (appId: string) => {
    const app = TECH_FORGE_APPS.find(a => a.id === appId);
    if (app?.route) {
      console.log(`Navigate to ${app.route}`);
    } else {
      alert(`${app?.name}は現在開発中です。`);
    }
  };

  const completedApps = TECH_FORGE_APPS.filter(app => app.completed);
  const inProgressApps = TECH_FORGE_APPS.filter(app => !app.completed);

  return (
    <div className="container">
      {/* ヘロセクション */}
      <section className="hero-section">
        <h1 className="hero-title">
          {title}
        </h1>
        <p className="hero-description">
          {description}
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-dot stat-dot-completed"></div>
            <span>完成: {completedApps.length}個</span>
          </div>
          <div className="stat-item">
            <div className="stat-dot stat-dot-progress"></div>
            <span>開発中: {inProgressApps.length}個</span>
          </div>
          <div className="stat-item">
            <div className="stat-dot stat-dot-target"></div>
            <span>目標: 100個</span>
          </div>
        </div>
      </section>

      {/* アプリ一覧 */}
      <section className="apps-section">
        <h2 className="section-title text-center">アプリケーション一覧</h2>
        
        {/* フェーズ1: 基本アプリ */}
        <div className="phase-section">
          <h3 className="phase-title">
            フェーズ1 - 基本アプリケーション
          </h3>
          <div className="grid grid-3">
            {TECH_FORGE_APPS.slice(0, 3).map(app => (
              <AppCard key={app.id} app={app} onClick={handleAppClick} />
            ))}
          </div>
        </div>

        {/* フェーズ2: 応用アプリ */}
        <div className="phase-section">
          <h3 className="phase-title">
            フェーズ2 - 応用アプリケーション
          </h3>
          <div className="grid grid-3">
            {TECH_FORGE_APPS.slice(3, 6).map(app => (
              <AppCard key={app.id} app={app} onClick={handleAppClick} />
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="coming-soon">
          <div className="coming-soon-icon">🚀</div>
          <h3 className="coming-soon-title">更多アプリ開発中</h3>
          <p className="coming-soon-description">
            100アプリケーション達成に向けて開発を続けています
          </p>
        </div>
      </section>

      {/* システム情報 */}
      <section className="system-section">
        <div className="card">
          <div className="card-header">
            <h2>システムステータス</h2>
          </div>
          <HealthStatus />
        </div>
      </section>
    </div>
  );
};