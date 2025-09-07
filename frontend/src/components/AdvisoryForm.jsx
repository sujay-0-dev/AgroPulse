import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AdvisoryForm = ({ onSubmit, isLoading }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    crop: "rice",
    growth_stage: "flowering",
    soil_ph: 6.5,
    soil_n: 85.2,
    soil_p: 42.1,
    soil_k: 120.5,
    soil_moisture: 75.3,
    temperature: 28.5,
    rainfall: 12.3,
    humidity: 78.2,
    state: "punjab",
    month: 7,
    soil_type: "loam",
    variety: "basmati",
    farmer_type: "progressive",
    irrigation_system: "drip"
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 md:text-4xl">Comprehensive Farm Advisory</h2>
          <p className="mt-4 text-gray-600">
            Fill in the details about your farm to receive a complete analysis covering fertilizer, irrigation, pest alerts, and yield prediction.
          </p>
      </div>
      <form onSubmit={handleSubmit} className="grid max-w-2xl grid-cols-1 gap-6 p-6 mx-auto mt-8 bg-white shadow-lg rounded-2xl md:grid-cols-2">
        <FormInput label="Crop Type" name="crop" value={formData.crop} onChange={handleChange} />
        <FormInput label="Growth Stage" name="growth_stage" value={formData.growth_stage} onChange={handleChange} />
        <FormInput label="Soil pH" name="soil_ph" type="number" value={formData.soil_ph} onChange={handleChange} />
        <FormInput label="Soil Nitrogen (kg/ha)" name="soil_n" type="number" value={formData.soil_n} onChange={handleChange} />
        <FormInput label="Soil Phosphorus (kg/ha)" name="soil_p" type="number" value={formData.soil_p} onChange={handleChange} />
        <FormInput label="Soil Potassium (kg/ha)" name="soil_k" type="number" value={formData.soil_k} onChange={handleChange} />
        <FormInput label="Soil Moisture (%)" name="soil_moisture" type="number" value={formData.soil_moisture} onChange={handleChange} />
        <FormInput label="Temperature (°C)" name="temperature" type="number" value={formData.temperature} onChange={handleChange} />
        <FormInput label="Rainfall (mm)" name="rainfall" type="number" value={formData.rainfall} onChange={handleChange} />
        <FormInput label="Humidity (%)" name="humidity" type="number" value={formData.humidity} onChange={handleChange} />
        <FormInput label="State" name="state" value={formData.state} onChange={handleChange} />
        <FormInput label="Month (1-12)" name="month" type="number" value={formData.month} onChange={handleChange} />
        <FormInput label="Soil Type" name="soil_type" value={formData.soil_type} onChange={handleChange} />
        <FormInput label="Variety" name="variety" value={formData.variety} onChange={handleChange} />
        <FormInput label="Farmer Type" name="farmer_type" value={formData.farmer_type} onChange={handleChange} />
        <FormInput label="Irrigation System" name="irrigation_system" value={formData.irrigation_system} onChange={handleChange} />
        
        <button type="submit" disabled={isLoading} className="w-full px-6 py-4 mt-4 text-lg font-bold text-white transition duration-300 transform bg-green-600 rounded-lg md:col-span-2 hover:bg-green-700 hover:scale-105">
          {isLoading ? 'Analyzing...' : 'Get Full Advisory'}
        </button>
      </form>
    </div>
  );
};

const FormInput = ({ label, name, type = 'text', value, onChange }) => (
    <div>
        <label htmlFor={name} className="block mb-1 text-sm font-bold text-gray-700">{label}</label>
        <input type={type} id={name} name={name} value={value} onChange={onChange} required className="w-full p-3 transition border-2 border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500" />
    </div>
);

export default AdvisoryForm;