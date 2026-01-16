import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Workspace } from './pages/Workspace';

import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <Router>
      <Helmet>
        <title>VisualGPA - Academic Intelligence</title>
        <meta name="description" content="Use VisualGPA to plan your academic future with precision. Calculate projected CGPA, explore scenario impacts, and visualize university grading systems." />
        <meta name="keywords" content="CGPA Calculator, GPA Planner, University Grades, Academic Performance, VisualGPA" />
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
