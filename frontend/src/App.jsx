import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AppLayout from './pages/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate('/app'); // Redirect to app on successful login/signup
      }
    });
    
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
      return <div className="min-h-screen bg-green-50"></div>;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route 
        path="/app" 
        element={
          <ProtectedRoute session={session}>
            <AppLayout session={session} />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;