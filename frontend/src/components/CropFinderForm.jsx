import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CropFinderForm = ({ onSubmit, isLoading }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ N: '90', P: '42', K: '43', temperature: '20.8', humidity: '82', ph: '6.5', rainfall: '202' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 md:text-4xl">Crop Finder</h2>
          <p className="mt-4 text-gray-600">
            Don't know what to plant? Enter your soil and weather data to find the most suitable crop for your field.
          </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md p-6 mx-auto mt-8 space-y-4 bg-white shadow-lg rounded-2xl">
        <FormInput icon="fa-solid fa-flask" label={t('N_label')} name="N" value={form.N} onChange={handleChange} />
        <FormInput icon="fa-solid fa-vial" label={t('P_label')} name="P" value={form.P} onChange={handleChange} />
        <FormInput icon="fa-solid fa-jar" label={t('K_label')} name="K" value={form.K} onChange={handleChange} />
        <FormInput icon="fa-solid fa-temperature-half" label={t('temperature_label')} name="temperature" value={form.temperature} onChange={handleChange} />
        <FormInput icon="fa-solid fa-droplet" label={t('humidity_label')} name="humidity" value={form.humidity} onChange={handleChange} />
        <FormInput icon="fa-solid fa-water" label={t('ph_label')} name="ph" value={form.ph} onChange={handleChange} />
        <FormInput icon="fa-solid fa-cloud-rain" label={t('rainfall_label')} name="rainfall" value={form.rainfall} onChange={handleChange} />

        <button type="submit" disabled={isLoading} className="w-full px-6 py-4 mt-4 text-lg font-bold text-white transition duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105">
          {isLoading ? 'Finding Crop...' : 'Find Best Crop'}
        </button>
      </form>
    </div>
  );
};

const FormInput = ({ icon, label, name, value, onChange }) => (
    <div className="flex items-center p-3 space-x-4 border-2 border-transparent rounded-lg bg-gray-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
        <i className={`${icon} text-xl text-gray-400 w-6 text-center`}></i>
        <div className="flex-1">
            <label htmlFor={name} className="text-xs font-bold text-gray-500">{label}</label>
            <input type="number" step="0.1" id={name} name={name} value={value} onChange={onChange} required className="w-full text-lg font-semibold text-gray-800 bg-transparent focus:outline-none" />
        </div>
    </div>
);

export default CropFinderForm;