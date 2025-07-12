import React from 'react';

export const StudyPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>勉強アプリ</h1>
      <p>進捗追跡機能付き学習管理システム</p>
      <div style={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'white',
      }}>
        <h2>📚 開発中 📚</h2>
        <p>勉強アプリは現在開発中です。</p>
        <p>学習進捗の追跡機能を実装予定！</p>
      </div>
    </div>
  );
};