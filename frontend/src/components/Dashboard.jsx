import React from 'react';
import WeatherCard from './WeatherCard.jsx';
import ProgressCard from './ProgressCard.jsx';
import QuestsCard from './QuestsCard.jsx';
import AchievementsCard from './AchievementsCard.jsx';

const Dashboard = () => {
    return (
        <div className="p-4 space-y-6 md:p-6 animate-fade-in">
            <WeatherCard />
            <QuestsCard />
            <ProgressCard />
            <AchievementsCard />
        </div>
    );
};

export default Dashboard;