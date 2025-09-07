import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="text-gray-800 bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center text-center text-white bg-center bg-cover"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')", height: '80vh' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl animate-fade-in-down">
              Smart Farming, Bountiful Harvests
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl animate-fade-in-up">
              Get instant, AI-powered advice for your crops. We help you increase your yield with data, not guesswork.
            </p>
            <Link
              to="/auth"
              className="inline-block px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-green-600 rounded-full hover:bg-green-700 hover:scale-105"
            >
              Get Started Now
            </Link>
          </div>
        </section>

        {/* Gamified Features Section */}
        <section id="features" className="px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold">Features for Modern Farmers</h2>
            <div className="grid gap-10 mt-12 md:grid-cols-3">
              <div className="p-8 transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-2"><i className="mb-4 text-4xl text-green-500 fa-solid fa-brain"></i><h3 className="mb-2 text-2xl font-bold">AI Crop Advisor</h3><p>Get the best crop recommendation based on your soil and weather.</p></div>
              <div className="p-8 transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-2"><i className="mb-4 text-4xl text-green-500 fa-solid fa-language"></i><h3 className="mb-2 text-2xl font-bold">Multilingual & Voice</h3><p>Use in English, Hindi, or Odia. Voice assistance is available.</p></div>
              <div className="p-8 transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-2"><i className="mb-4 text-4xl text-green-500 fa-solid fa-gamepad"></i><h3 className="mb-2 text-2xl font-bold">Gamified Dashboard</h3><p>Earn badges and climb the leaderboard with best farming practices.</p></div>
            </div>
          </div>
        </section>
        
        {/* Future Implementations Section */}
        <section id="future" className="px-4 py-20 bg-green-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold">Future Innovations</h2>
            <p className="mb-12 text-gray-600">We are constantly working to bring you more.</p>
            <div className="grid gap-10 md:grid-cols-3">
                <div className="p-8 bg-white shadow-lg rounded-xl opacity-70"><i className="mb-4 text-4xl text-orange-500 fa-solid fa-store"></i><h3 className="mb-2 text-2xl font-bold">Marketplace Link</h3><p>Connect with buyers and get the best price for your harvest.</p></div>
                <div className="p-8 bg-white shadow-lg rounded-xl opacity-70"><i className="mb-4 text-4xl text-red-500 fa-solid fa-bug-slash"></i><h3 className="mb-2 text-2xl font-bold">Pest Detection</h3><p>Use your phone's camera to identify and get solutions for crop diseases.</p></div>
                <div className="p-8 bg-white shadow-lg rounded-xl opacity-70"><i className="mb-4 text-4xl text-blue-500 fa-solid fa-chart-simple"></i><h3 className="mb-2 text-2xl font-bold">Yield Tracking</h3><p>Log your harvest data and get insights to improve for next season.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;