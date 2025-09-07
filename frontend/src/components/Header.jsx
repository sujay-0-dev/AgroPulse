import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => { i18n.changeLanguage(lng); };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white/80 backdrop-blur-md">
      <nav className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        <Link to="/" className="text-2xl font-bold text-green-700">🌾 AgroPulse</Link>
        <div className="flex items-center space-x-4">
          <div className="items-center hidden p-1 space-x-2 bg-gray-100 rounded-full md:flex">
            <button onClick={() => changeLanguage('en')} className={`text-sm font-bold px-3 py-1 rounded-full ${i18n.language === 'en' ? 'bg-green-600 text-white' : 'text-gray-600'}`}>EN</button>
            <button onClick={() => changeLanguage('hi')} className={`text-sm font-bold px-3 py-1 rounded-full ${i18n.language === 'hi' ? 'bg-green-600 text-white' : 'text-gray-600'}`}>HI</button>
            <button onClick={() => changeLanguage('or')} className={`text-sm font-bold px-3 py-1 rounded-full ${i18n.language === 'or' ? 'bg-green-600 text-white' : 'text-gray-600'}`}>OR</button>
          </div>
          <Link to="/auth" className="px-5 py-2 text-sm font-bold text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;