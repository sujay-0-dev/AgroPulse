import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  // ... (The code from your Auth.jsx component remains the same)
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let error;
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        error = signUpError;
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        error = signInError;
      }
      if (error) throw error;
      alert(isSignUp ? 'Check your email for the verification link!' : 'Logged in successfully! You will be redirected.');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-green-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <div className="text-center">
            <Link to="/" className="text-2xl font-bold text-green-700">🌾 AgroPulse</Link>
            <p className="mt-2 text-gray-600">
            {isSignUp ? 'Create a new account to get started' : 'Welcome back! Please sign in.'}
            </p>
        </div>
        {/* ... (rest of the Auth.jsx code) ... */}
        <form onSubmit={handleAuthAction} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="you@example.com"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 mt-1 border rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="••••••••"/>
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-gray-400">
            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>
        <div className="text-center">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-green-600 hover:underline">
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;