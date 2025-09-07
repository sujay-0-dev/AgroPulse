import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white/80 backdrop-blur-md">
      <nav className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        <Link to="/" className="text-2xl font-bold text-green-700">🌾 AgroPulse</Link>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button onClick={() => changeLanguage('en')} className={`text-sm font-medium p-2 rounded-md ${i18n.language === 'en' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}>EN</button>
            <button onClick={() => changeLanguage('hi')} className={`text-sm font-medium p-2 rounded-md ${i18n.language === 'hi' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}>HI</button>
            <button onClick={() => changeLanguage('or')} className={`text-sm font-medium p-2 rounded-md ${i18n.language === 'or' ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}>OR</button>
          </div>
          <Link
            to="/login"
            className="px-5 py-2 text-sm font-bold text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-700"
          >
            Login / Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;