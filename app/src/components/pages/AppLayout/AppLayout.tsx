import React from 'react';
import Header from '@/components/organisms/Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <main>
        {children}
      </main>
      <footer style={{
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
      }}>
        <p>&copy; 2025 Tech Forge - 100アプリ開発プロジェクト</p>
      </footer>
    </div>
  );
};