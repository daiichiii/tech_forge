import React from 'react';

export const OthelloPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>オセロゲーム</h1>
      <p>マルチプレイヤー対応のターン制戦略ゲーム</p>
      <div style={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'white',
      }}>
        <h2>🚧 開発中 🚧</h2>
        <p>オセロゲームは現在開発中です。</p>
        <p>近日公開予定！</p>
      </div>
    </div>
  );
};