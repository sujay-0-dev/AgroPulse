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
              to="/login"
              className="px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-green-600 rounded-full hover:bg-green-700 hover:scale-105"
            >
              Get Started Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold">Features We Provide</h2>
            <p className="mb-12 text-gray-600">Everything a modern farmer needs to succeed.</p>
            <div className="grid gap-10 md:grid-cols-3">
              {/* Feature Card 1 */}
              <div className="p-8 bg-white shadow-lg rounded-xl">
                <i className="mb-4 text-4xl text-green-500 fa-solid fa-brain"></i>
                <h3 className="mb-2 text-2xl font-bold">AI Crop Advisor</h3>
                <p>Get the best crop recommendation based on your soil, weather, and location.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="p-8 bg-white shadow-lg rounded-xl">
                <i className="mb-4 text-4xl text-green-500 fa-solid fa-language"></i>
                <h3 className="mb-2 text-2xl font-bold">Multilingual Support</h3>
                <p>Use the app in English, Hindi, or Odia. Voice assistance is also available.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="p-8 bg-white shadow-lg rounded-xl">
                <i className="mb-4 text-4xl text-green-500 fa-solid fa-gamepad"></i>
                <h3 className="mb-2 text-2xl font-bold">Gamified Dashboard</h3>
                <p>Earn badges and climb the leaderboard as you follow best farming practices.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Future Features Section */}
        <section id="future" className="px-4 py-20 bg-green-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold">Coming Soon</h2>
            <p className="mb-12 text-gray-600">We are constantly innovating to bring you more.</p>
            <div className="grid gap-10 md:grid-cols-3">
                <div className="p-8 bg-white shadow-lg rounded-xl opacity-70">
                    <i className="mb-4 text-4xl text-blue-500 fa-solid fa-droplet"></i>
                    <h3 className="mb-2 text-2xl font-bold">Smart Irrigation</h3>
                    <p>Automated alerts to water your crops at the perfect time.</p>
                </div>
                <div className="p-8 bg-white shadow-lg rounded-xl opacity-70">
                    <i className="mb-4 text-4xl text-orange-500 fa-solid fa-store"></i>
                    <h3 className="mb-2 text-2xl font-bold">Marketplace Link</h3>
                    <p>Connect with buyers and get the best price for your harvest.</p>
                </div>
                <div className="p-8 bg-white shadow-lg rounded-xl opacity-70">
                    <i className="mb-4 text-4xl text-red-500 fa-solid fa-bug-slash"></i>
                    <h3 className="mb-2 text-2xl font-bold">Pest Detection</h3>
                    <p>Use your phone's camera to identify and get solutions for crop diseases.</p>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;