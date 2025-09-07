import React from 'react';

const QuestItem = ({ icon, text, isCompleted }) => (
  <div className={`flex items-center space-x-4 p-3 rounded-lg ${isCompleted ? 'bg-green-50 text-gray-500 line-through' : 'bg-gray-50'}`}>
    <div className={`text-2xl ${isCompleted ? 'text-green-500' : 'text-blue-500'}`}>
      <i className={icon}></i>
    </div>
    <p className="font-medium">{text}</p>
  </div>
);


const QuestsCard = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-2xl">
      <h3 className="mb-4 text-xl font-bold text-gray-800">Today's Tasks</h3>
      <div className="space-y-3">
        <QuestItem icon="fa-solid fa-droplet" text="Irrigate the maize field" isCompleted={true} />
        <QuestItem icon="fa-solid fa-leaf" text="Apply fertilizer to rice paddy" isCompleted={false} />
        <QuestItem icon="fa-solid fa-magnifying-glass" text="Check for pests" isCompleted={false} />
      </div>
    </div>
  );
};

export default QuestsCard;