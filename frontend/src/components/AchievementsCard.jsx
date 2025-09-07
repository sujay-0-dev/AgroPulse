import React from 'react';

const Badge = ({ icon, title, earned }) => (
    <div className={`text-center transition-opacity ${earned ? '' : 'opacity-30'}`}>
        <div className="text-6xl" title={title}>{icon}</div>
        <span className="text-xs font-bold text-gray-600">{title}</span>
    </div>
);


const AchievementsCard = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Achievements</h3>
            <div className="grid items-center grid-cols-2 gap-4">
                <div>
                    <p className="mb-3 font-semibold text-center">Badges Earned</p>
                    <div className="flex justify-center space-x-4">
                       <Badge icon="🥇" title="First Harvest" earned={true} />
                       <Badge icon="💧" title="Water Saver" earned={false} />
                       <Badge icon="🛡️" title="Pest Pro" earned={true} />
                    </div>
                </div>
                <div className="pl-4 border-l">
                     <p className="mb-3 font-semibold text-center">Leaderboard Rank</p>
                     <p className="text-4xl font-extrabold text-center text-green-600">#5</p>
                     <p className="text-sm font-medium text-center text-gray-500">in your region</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementsCard;