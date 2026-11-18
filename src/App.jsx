import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import FoodScanner from './pages/FoodScanner.jsx';
import NutritionGoals from './pages/NutritionGoals.jsx';
import HealthGuide from './pages/HealthGuide.jsx';
import FoodLibrary from './pages/FoodLibrary.jsx';
import FoodHistory from './pages/FoodHistory.jsx';
import Layout from './components/Layout.jsx';

function App() {
  const [profile, setProfile] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('nv-profile'));
    } catch {
      return null;
    }
  });

  function saveProfile(value) {
    localStorage.setItem('nv-profile', JSON.stringify(value));
    setProfile(value);
  }

  function logout() {
    localStorage.removeItem('nv-profile');
    setProfile(null);
  }

  if (!profile) {
    return <Auth onSuccess={saveProfile} />;
  }

  return (
    <Layout profile={profile} onLogout={logout}>
      <Routes>
        <Route
          path="/"
          element={<Dashboard profile={profile} />}
        />

        <Route path="/scanner" element={<FoodScanner />} />

        <Route
          path="/goals"
          element={<NutritionGoals profile={profile} />}
        />

        <Route
          path="/health"
          element={<HealthGuide profile={profile} />}
        />

        <Route path="/library" element={<FoodLibrary />} />

        <Route path="/history" element={<FoodHistory />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;