import React from 'react';

const ResultCard = ({ recommendation, onReset }) => {
  const cropName = recommendation.predicted_crop;
  const confidence = (recommendation.confidence * 100).toFixed(1);

  // This creates the path to your local image in the `public/images` folder
  const imageUrl = `/images/${cropName.toLowerCase()}.jpg`;

  return (
    <div className="max-w-md mx-auto my-8 overflow-hidden bg-white shadow-2xl rounded-2xl animate-fade-in">
      <img 
        className="object-cover w-full h-56" 
        src={imageUrl} 
        alt={cropName} 
        // This provides a fallback image in case one is missing
        onError={(e) => { e.target.onerror = null; e.target.src="/images/default.jpg" }}
      />
      <div className="p-6">
        <p className="text-sm font-semibold text-gray-500">BEST CROP TO SOW</p>
        <h1 className="mt-2 text-5xl font-bold text-green-800 capitalize">{cropName}</h1>
        
        <div className="mt-6">
          <p className="font-medium text-gray-600">Prediction Confidence</p>
          <div className="w-full h-4 mt-2 bg-gray-200 rounded-full">
            <div
              className="h-4 transition-all duration-500 bg-green-500 rounded-full"
              style={{ width: `${confidence}%` }}
            ></div>
          </div>
          <p className="mt-1 font-bold text-right text-green-600">{confidence}%</p>
        </div>
        
        <button
          onClick={onReset}
          className="w-full py-3 mt-8 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Start New Analysis
        </button>
      </div>
    </div>
  );
};

export default ResultCard;