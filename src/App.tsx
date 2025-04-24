import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProfilePage from './pages/ProfilePage';
import TrainingPage from './pages/TrainingPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProfilePage />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="menu" element={<MenuPage />} />
      </Route>
    </Routes>
  );
}

export default App; 