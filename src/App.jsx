import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'

// Garante que ao mudar de rota a página sempre role para o topo suavemente
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Ao recarregar a página (F5 / Ctrl+R), volta para a home em vez de manter a rota atual
function ReloadToHome() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const [nav] = performance.getEntriesByType('navigation');
    if (nav?.type === 'reload' && pathname !== '/') navigate('/', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <ReloadToHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MotionConfig>
  );
}
