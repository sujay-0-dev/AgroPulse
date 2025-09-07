import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Dashboard from './Dashboard';
import MyFarm from './MyFarm';

const Layout = ({ user, pin, onLogout }) => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('myFarm');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
         <h1 className="text-xl font-bold text-green-600">KisanAI</h1>
         <button onClick={onLogout} className="text-sm text-red-500">Logout</button>
      </header>

      {!isOnline && (
        <div className="fixed z-10 w-full py-2 text-center text-white bg-red-500 top-16">
          {t('offline_message')}
        </div>
      )}
      
      {/* Main Content Area */}
      <main className="flex-1 pb-24">
        {activeTab === 'dashboard' && <Dashboard user={user} />}
        {activeTab === 'myFarm' && <MyFarm user={user} pin={pin} />}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.1)] p-2">
        <div className="flex items-center justify-around">
          {/* Nav Buttons */}
          <button onClick={() => setActiveTab('dashboard')} className={`flex flex-col items-center transition-colors ${activeTab === 'dashboard' ? 'text-green-500' : 'text-gray-500'}`}>
            <i className="text-2xl fa-solid fa-chart-line"></i>
            <span className="text-xs">{t('dashboard')}</span>
          </button>
          <button onClick={() => setActiveTab('myFarm')} className={`flex flex-col items-center transition-colors ${activeTab === 'myFarm' ? 'text-green-500' : 'text-gray-500'}`}>
            <i className="text-2xl fa-solid fa-seedling"></i>
            <span className="text-xs">{t('myFarm')}</span>
          </button>
          
          {/* Language Buttons */}
          <div className="flex items-center p-2 space-x-2 bg-gray-100 rounded-full">
            <button onClick={() => changeLanguage('en')} className={`text-sm rounded-full px-2 ${i18n.language === 'en' ? 'bg-green-500 text-white' : ''}`}>EN</button>
            <button onClick={() => changeLanguage('hi')} className={`text-sm rounded-full px-2 ${i18n.language === 'hi' ? 'bg-green-500 text-white' : ''}`}>HI</button>
            <button onClick={() => changeLanguage('or')} className={`text-sm rounded-full px-2 ${i18n.language === 'or' ? 'bg-green-500 text-white' : ''}`}>OR</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;