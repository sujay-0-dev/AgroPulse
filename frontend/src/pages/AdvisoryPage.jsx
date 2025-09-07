import React, { useState } from 'react';
import axios from 'axios';
import AdvisoryForm from '../components/AdvisoryForm';
import AdvisoryResults from '../components/AdvisoryResults';

const AdvisoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setResults(null);
    try {
      const response = await axios.post('http://localhost:5000/api/v1/get-advisory', formData);
      setResults(response.data);
    } catch (error) {
      console.error("Failed to get advisory:", error);
      alert('Failed to get advisory data. Please check that the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div>
      {results ? (
        <AdvisoryResults results={results} onReset={handleReset} />
      ) : (
        <AdvisoryForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      )}
    </div>
  );
};

export default AdvisoryPage;