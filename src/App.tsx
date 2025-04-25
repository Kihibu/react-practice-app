import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProfilePage from './pages/ProfilePage';
import TrainingPage from './pages/TrainingPage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import SettingsPage from './pages/SettingsPage';
import BalancePage from './pages/BalancePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProfilePage />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="menu">
          <Route index element={<MenuPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="balance" element={<BalancePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App; 