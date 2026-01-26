import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { HomePage } from '@/app/pages/HomePage';
import { PortfolioPage } from '@/app/pages/PortfolioPage';
import { CaseStudyPage } from '@/app/pages/CaseStudyPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0f] antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<CaseStudyPage />} />
        </Routes>
      </div>
    </Router>
  );
}