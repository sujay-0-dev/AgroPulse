import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AppLayout from './pages/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });
    
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
      return <div></div>; // Return a blank div or a spinner while checking session
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage />} />
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