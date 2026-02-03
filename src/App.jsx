import { Routes, Route } from 'react-router-dom';
import './styles/reset.css';
import './styles/style.css';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import WorkPage from './pages/WorkPage';
import WorkDetailPage from './pages/WorkDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/:slug" element={<WorkDetailPage />} />
    </Routes>
  );
}

export default App;
