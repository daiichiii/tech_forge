import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from './Header';

export const HeaderContainer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ナビゲーションアイテムの定義
  const navigationItems = [
    { label: 'ホーム', path: '/' },
    { label: 'オセロ', path: '/othello' },
    { label: '勉強アプリ', path: '/study' },
    { label: '壁当てゲーム', path: '/wall-bounce' },
  ];

  const handleNavigate = (path: string) => {
    // ナビゲーション時の追加ロジック（アナリティクス等）
    console.log(`Navigating to: ${path} from: ${location.pathname}`);
    // 必要に応じてナビゲート（react-router-domのLinkが処理するので通常は不要）
  };

  return (
    <Header
      logoText="Tech Forge"
      navigationItems={navigationItems}
      onNavigate={handleNavigate}
    />
  );
};