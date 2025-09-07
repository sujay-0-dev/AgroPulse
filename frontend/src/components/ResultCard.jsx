import React from 'react';

const ResultCard = ({ recommendation, onReset }) => {
  const cropName = recommendation.predicted_crop;
  const confidence = (recommendation.confidence * 100).toFixed(1);
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
        <div className="p-6">
            <p className="text-sm font-bold tracking-wider text-gray-500">RECOMMENDED CROP</p>
            <h1 className="mt-2 text-6xl font-extrabold text-green-800 capitalize">{cropName}</h1>
            
            <div className="mt-6">
            <p className="font-bold text-gray-600">Prediction Confidence</p>
            <div className="w-full h-4 mt-2 overflow-hidden bg-gray-200 rounded-full">
                <div
                className="flex items-center justify-end h-4 pr-2 text-xs font-bold text-right text-white rounded-full bg-gradient-to-r from-yellow-400 to-green-500"
                style={{ width: `${confidence}%` }}
                >{confidence > 20 && `${confidence}%`}</div>
            </div>
            </div>
            
            <button
            onClick={onReset}
            className="w-full py-4 mt-8 font-semibold text-white transition transform bg-green-600 rounded-xl hover:bg-green-700 hover:scale-105"
            >
            Analyze Another Field
            </button>
        </div>
        </div>
    </div>
  );
};

export default ResultCard;