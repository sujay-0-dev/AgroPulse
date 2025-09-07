import React from 'react';

const CropResultCard = ({ result, onReset }) => {
  // *** THIS IS THE FIX ***
  // Changed result.prediction to result.predicted_crop to match the API response
  const cropName = result.predicted_crop || "Unknown"; 
  
  const imageUrl = `/images/${cropName.toLowerCase()}.jpg`;

  return (
    <div className="p-4 animate-fade-in-up">
        <div className="max-w-md mx-auto overflow-hidden bg-white shadow-2xl rounded-3xl">
        <img 
            className="object-cover w-full h-64" 
            src={imageUrl} 
            alt={cropName} 
            onError={(e) => { e.target.onerror = null; e.target.src="/images/default.jpg" }}
        />
        <div className="p-6 text-center">
            <p className="text-sm font-bold tracking-wider text-gray-500">MOST SUITABLE CROP</p>
            <h1 className="mt-2 text-6xl font-extrabold text-blue-800 capitalize">{cropName}</h1>
            <p className="mt-4 text-gray-600">Based on your provided data, this crop has the highest potential for a successful yield.</p>
            <button
            onClick={onReset}
            className="w-full py-4 mt-8 font-semibold text-white transition transform bg-blue-600 rounded-xl hover:bg-blue-700 hover:scale-105"
            >
            Check Another Field
            </button>
        </div>
        </div>
    </div>
  );
};

export default CropResultCard;