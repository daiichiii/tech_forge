import React from 'react';

export const WallBouncePage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>壁当てゲーム</h1>
      <p>アニメーション・物理演算学習ゲーム</p>
      <div style={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'white',
      }}>
        <h2>🎮 開発中 🎮</h2>
        <p>壁当てゲームは現在開発中です。</p>
        <p>物理演算とアニメーションを駆使したゲームを実装予定！</p>
      </div>
    </div>
  );
};