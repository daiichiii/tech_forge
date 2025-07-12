import React from 'react';
import { HomePage } from './HomePage';

export const HomePageContainer: React.FC = () => {
  // プロジェクトデータの定義
  const projectData = {
    title: 'Tech Forge - 100アプリ開発プロジェクト',
    description: 'このプロジェクトは、様々なWebアプリケーションを開発することで、プログラミングスキルを向上させることを目的としています。',
    projectFeatures: [
      '目標: 100個のWebアプリケーションを開発',
      '技術スタック: React + TypeScript + Rails API',
      'データベース: MySQL + Redis',
      '開発環境: Docker Compose',
      'アーキテクチャ: Atomic Design + Presentational/Container パターン',
    ],
    phase1Apps: [
      'オセロゲーム - マルチプレイヤー対応のターン制戦略ゲーム',
      '勉強アプリ - 進捗追跡機能付き学習管理システム',
      '壁当てゲーム - アニメーション・物理演算学習ゲーム',
    ],
  };

  return (
    <HomePage
      title={projectData.title}
      description={projectData.description}
      projectFeatures={projectData.projectFeatures}
      phase1Apps={projectData.phase1Apps}
    />
  );
};