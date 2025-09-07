import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../supabaseClient';
import Dashboard from '../components/Dashboard';
import MyFarm from '../components/MyFarm';

const AppLayout = ({ session }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] =  useState('dashboard');
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  
  const handleHelp = () => {
      alert("Voice assistant coming soon! Tap here to speak your question.");
  }

  // Render the active component
  let ActiveComponent;
  switch (activeTab) {
      case 'myFarm':
          ActiveComponent = <MyFarm session={session} />;
          break;
      case 'dashboard':
      default:
          ActiveComponent = <Dashboard user={session.user} />;
          break;
  }

  return (
    <div className="min-h-screen font-sans bg-gray-100">
      <header className="sticky top-0 z-40 flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-3">
            <img src="/images/avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
            <div>
                <span className="text-sm text-gray-500">Welcome back,</span>
                <p className="font-bold text-gray-800">{session.user.email.split('@')[0]}</p>
            </div>
        </div>
         <button onClick={handleLogout} className="text-sm font-bold text-red-500 hover:text-red-700">
           Logout
         </button>
      </header>
      
      <main className="pb-24">
        {ActiveComponent}
      </main>

      {/* Floating Action Button for Voice */}
      <div className="fixed z-20 bottom-24 right-5">
        <button onClick={handleHelp} className="flex items-center justify-center w-16 h-16 text-3xl text-white transition-transform transform bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 hover:scale-110">
            <i className="fa-solid fa-microphone"></i>
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-2 rounded-t-2xl z-40">
         <div className="flex items-center justify-around">
          <NavButton icon="fa-solid fa-house" label={t('dashboard')} isActive={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavButton icon="fa-solid fa-leaf" label={t('myFarm')} isActive={activeTab === 'myFarm'} onClick={() => setActiveTab('myFarm')} />
          <NavButton icon="fa-solid fa-chart-simple" label="Sensor Data" isActive={activeTab === 'sensors'} onClick={() => alert("Sensor data page coming soon!")} />
          <NavButton icon="fa-solid fa-users" label="Community" isActive={activeTab === 'community'} onClick={() => alert("Community page coming soon!")} />
        </div>
      </nav>
    </div>
  );
};

// Helper component for Navigation buttons
const NavButton = ({ icon, label, isActive, onClick }) => (
    <button onClick={onClick} className={`flex flex-col items-center transition-colors w-24 h-16 justify-center rounded-lg ${isActive ? 'text-green-600 bg-green-50' : 'text-gray-500'}`}>
        <i className={`${icon} text-2xl mb-1`}></i>
        <span className="text-xs font-bold">{label}</span>
    </button>
);

export default AppLayout;