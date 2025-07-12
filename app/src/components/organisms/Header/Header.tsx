import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  logoText: string;
  navigationItems: {
    label: string;
    path: string;
  }[];
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  logoText,
  navigationItems,
  onNavigate,
}) => {
  const handleNavClick = (path: string) => {
    onNavigate?.(path);
  };

  return (
    <header style={{ 
      backgroundColor: '#282c34', 
      padding: '1rem', 
      marginBottom: '2rem' 
    }}>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '1.5rem', 
            fontWeight: 'bold' 
          }}
          onClick={() => handleNavClick('/')}
        >
          {logoText}
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {navigationItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'background-color 0.2s'
              }}
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};