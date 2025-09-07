import React, { useState } from 'react';
import axios from 'axios';
import CropFinderForm from '../components/CropFinderForm';
import CropResultCard from '../components/CropResultCard';

const CropFinderPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await axios.post('http://localhost:5000/api/v1/recommend-crop', formData);
      setResult(response.data);
    } catch (error) {
      console.error("Failed to get crop recommendation:", error);
      alert('Failed to get crop recommendation. Please check that the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div>
      {result ? (
        <CropResultCard result={result} onReset={handleReset} />
      ) : (
        <CropFinderForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      )}
    </div>
  );
};

export default CropFinderPage;