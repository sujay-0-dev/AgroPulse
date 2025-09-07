import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      let authError;
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        authError = error;
        if (!authError) alert('Success! Please check your email for a verification link.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        authError = error;
      }
      if (authError) throw authError;
    } catch (error) {
      setError(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-green-50" style={{backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: 'cover'}}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 w-full max-w-md p-8 space-y-4 shadow-2xl bg-white/90 backdrop-blur-sm rounded-2xl">
        <div className="text-center">
            <Link to="/" className="text-3xl font-bold text-green-800">🌾 AgroPulse</Link>
            <p className="mt-2 font-medium text-gray-700">
              {isSignUp ? 'Create your account to begin' : 'Welcome back, Farmer!'}
            </p>
        </div>
        
        {error && (
            <div className="p-4 text-center text-red-700 bg-red-100 border-l-4 border-red-500 rounded-lg">
                <p>{error}</p>
            </div>
        )}

        <form onSubmit={handleAuthAction} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 mt-1 transition border-2 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="you@email.com"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 mt-1 transition border-2 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="••••••••"/>
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 font-semibold text-white transition transform bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-gray-400 hover:scale-105">
            {loading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Login')}
          </button>
        </form>
        <div className="text-center">
          <button onClick={() => { setIsSignUp(!isSignUp); setError(''); }} className="text-sm font-medium text-green-700 hover:underline">
            {isSignUp ? 'Already have an account? Login' : "New here? Create an Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;