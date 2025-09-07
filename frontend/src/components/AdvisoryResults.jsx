import React from 'react';

const AdvisoryResults = ({ results, onReset }) => {
  const { fertilizer, irrigation, pest_alert, yield_prediction } = results;

  return (
    <div className="p-4 space-y-6 md:p-6 animate-fade-in-up">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800">Your Farm Advisory Report</h2>
        </div>

      {/* Fertilizer Card */}
      <div className="p-6 bg-white shadow-lg rounded-2xl">
        <h3 className="flex items-center mb-4 text-xl font-bold text-gray-800"><i className="mr-3 text-green-500 fa-solid fa-flask-vial"></i>Fertilizer Recommendation</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{fertilizer.n_fertilizer.toFixed(1)}</p>
            <p className="text-sm text-gray-500">Nitrogen (N) kg/ha</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{fertilizer.p_fertilizer.toFixed(1)}</p>
            <p className="text-sm text-gray-500">Phosphorus (P) kg/ha</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{fertilizer.k_fertilizer.toFixed(1)}</p>
            <p className="text-sm text-gray-500">Potassium (K) kg/ha</p>
          </div>
        </div>
      </div>

      {/* Irrigation & Pest Alert Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className={`p-6 rounded-2xl shadow-lg text-white ${irrigation.irrigation_needed ? 'bg-blue-500' : 'bg-gray-500'}`}>
          <h3 className="flex items-center mb-2 text-xl font-bold"><i className="mr-3 fa-solid fa-droplet"></i>Irrigation Status</h3>
          <p className="text-3xl font-bold">{irrigation.irrigation_needed ? 'Watering Needed' : 'No Watering Needed'}</p>
        </div>
        <div className={`p-6 rounded-2xl shadow-lg text-white ${pest_alert.pest_alert ? 'bg-red-500' : 'bg-green-500'}`}>
          <h3 className="flex items-center mb-2 text-xl font-bold"><i className="mr-3 fa-solid fa-bug"></i>Pest Alert</h3>
          <p className="text-3xl font-bold">{pest_alert.pest_alert ? 'High Risk of Pests!' : 'Low Risk of Pests'}</p>
        </div>
      </div>
      
      {/* Yield Prediction Card (Optional) */}
      {yield_prediction && (
        <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="flex items-center mb-2 text-xl font-bold text-gray-800"><i className="mr-3 text-yellow-500 fa-solid fa-wheat-awn"></i>Yield Prediction</h3>
            <p className="text-3xl font-bold">{yield_prediction.yield_prediction.toFixed(2)} <span className="text-lg font-medium text-gray-500">tons/ha</span></p>
        </div>
      )}

      <button
        onClick={onReset}
        className="w-full py-4 mt-4 font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-800"
      >
        Run New Analysis
      </button>
    </div>
  );
};

export default AdvisoryResults;