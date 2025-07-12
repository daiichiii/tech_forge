import React from 'react';
import HealthStatus from '@/components/ui/HealthStatus';

interface HomePageProps {
  title: string;
  description: string;
  projectFeatures: string[];
  phase1Apps: string[];
}

export const HomePage: React.FC<HomePageProps> = ({
  title,
  description,
  projectFeatures,
  phase1Apps,
}) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>プロジェクト概要</h2>
        <ul>
          {projectFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>フェーズ1 - 基本アプリ</h2>
        <ul>
          {phase1Apps.map((app, index) => (
            <li key={index}>{app}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>システムステータス</h2>
        <HealthStatus />
      </section>
    </div>
  );
};