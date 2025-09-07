import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import ResultCard from './ResultCard'; // Import our new component

const MyFarm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ N: '90', P: '42', K: '43', temperature: '20.8', humidity: '82', ph: '6.5', rainfall: '202' });
  
  // State to manage the UI view
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState(null); // Will hold the result object

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRecommendation(null);
    try {
      const response = await axios.post('http://localhost:5000/api/recommend', form);
      setRecommendation(response.data); // Store the whole object { predicted_crop, confidence, ... }
    } catch (error) {
      console.error("Failed to get recommendation:", error);
      alert('Failed to get recommendation.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setRecommendation(null);
  };
  
  // -- Conditional Rendering Logic --

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Analyzing Your Soil...</p>
      </div>
    );
  }

  if (recommendation) {
    return <ResultCard recommendation={recommendation} onReset={handleReset} />;
  }

  // Default view: The Form
  return (
    <div className="p-4 md:p-8 animate-fade-in">
      <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 md:text-4xl">{t('recommendCrop')}</h2>
          <p className="mt-4 text-gray-600">
            Enter your soil's health metrics and local weather conditions below to receive an instant, AI-powered crop recommendation.
          </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md p-8 mx-auto mt-8 bg-white shadow-lg rounded-2xl">
        {Object.keys(form).map((key) => (
          <div key={key} className="mb-5">
            <label htmlFor={key} className="block mb-2 font-medium text-gray-700 capitalize">{t(`${key}_label`)}</label>
            <input type="number" step="0.1" id={key} name={key} value={form[key]} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
        ))}
        <button type="submit" disabled={isLoading} className="w-full px-6 py-4 mt-4 text-lg font-bold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700">
          {t('submitButton')}
        </button>
      </form>
    </div>
  );
};

export default MyFarm;