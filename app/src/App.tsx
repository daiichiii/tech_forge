import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/pages/AppLayout';
import { OthelloPage } from './components/pages/OthelloPage';
import { StudyPage } from './components/pages/StudyPage';
import { WallBouncePage } from './components/pages/WallBouncePage';
import { HomePage } from './components/pages/HomePage';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/othello" element={<OthelloPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/wall-bounce" element={<WallBouncePage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;