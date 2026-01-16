import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Workspace } from './pages/Workspace';
import { TEXT } from './text';

import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <Router>
      <Helmet>
        <title>VisualGPA - Academic Intelligence & CGPA Planner</title>
        <meta name="description" content="Use VisualGPA to plan your academic future with precision. Calculate projected CGPA, explore scenario impacts, and visualize university grading systems." />
        <meta name="keywords" content="CGPA Calculator, GPA Planner, University Grades, Academic Performance, VisualGPA" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={TEXT.BRAND.BASE_URL} />
        <meta property="og:title" content="VisualGPA - Academic Intelligence & CGPA Planner" />
        <meta property="og:description" content="The most advanced visual GPA planner for university students. Plan scenarios and track performance." />
        <meta property="og:image" content={`${TEXT.BRAND.BASE_URL}/utar_campus.png`} />
      </Helmet>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:uniId" element={<Workspace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
