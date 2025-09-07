import React from 'react';

const ProgressCard = () => {
  const userLevel = 5;
  const userXp = 1250;
  const xpForNextLevel = 2000;
  const progressPercent = (userXp / xpForNextLevel) * 100;

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl">
      <h3 className="mb-4 text-xl font-bold text-gray-800">Your Progress</h3>
      <div className="flex items-center justify-between mb-2 font-bold text-gray-700">
        <span>Level {userLevel}</span>
        <span>{userXp} / {xpForNextLevel} XP</span>
      </div>
      <div className="w-full h-4 overflow-hidden bg-gray-200 rounded-full">
        <div 
          className="h-4 transition-all duration-500 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500" 
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressCard;