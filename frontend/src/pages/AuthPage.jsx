import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../supabaseClient';
import Dashboard from '../components/Dashboard';
import MyFarm from '../components/MyFarm';

const AppLayout = ({ session }) => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('myFarm');
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  
  const handleHelp = () => {
      // In a real app, this would trigger the Web Speech API
      // to listen for a user's voice command.
      alert("Help feature coming soon! You will be able to ask questions with your voice.");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
       <header className="flex items-center justify-between p-4 bg-white shadow-md">
         <h1 className="text-xl font-bold text-green-600">🌾 AgroPulse Dashboard</h1>
         <button onClick={handleLogout} className="flex items-center space-x-2 text-sm text-red-500 hover:text-red-700">
           <span>Logout</span>
           <i className="fa-solid fa-right-from-bracket"></i>
         </button>
      </header>
      
      <main className="flex-1 pb-24">
        {activeTab === 'dashboard' && <Dashboard user={session.user} />}
        {activeTab === 'myFarm' && <MyFarm session={session} />}
      </main>

      <div className="fixed z-20 bottom-20 right-5">
        <button onClick={handleHelp} className="flex items-center justify-center w-16 h-16 text-3xl text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600">
            <i className="fa-solid fa-microphone"></i>
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.1)] p-2">
         <div className="flex items-center justify-around">
          <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center transition-colors w-24 h-16 justify-center ${activeTab === 'dashboard' ? 'text-green-500' : 'text-gray-500'}`}>
            <i className="mb-1 text-2xl fa-solid fa-chart-line"></i>
            <span className="text-xs font-bold">{t('dashboard')}</span>
          </button>
          <button onClick={() => setActiveTab('myFarm')} className={`flex flex-col items-center transition-colors w-24 h-16 justify-center ${activeTab === 'myFarm' ? 'text-green-500' : 'text-gray-500'}`}>
            <i className="mb-1 text-2xl fa-solid fa-seedling"></i>
            <span className="text-xs font-bold">{t('myFarm')}</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AppLayout;