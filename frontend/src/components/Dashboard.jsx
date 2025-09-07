import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Dashboard = ({ user }) => {
    const { t, i18n } = useTranslation();
    const [dashboardData, setDashboardData] = useState({ leaderboard: [], advisories: {} });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/dashboard');
                setDashboardData(response.data);
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            }
        };
        fetchDashboardData();
    }, []);
    
    const currentAdvisory = dashboardData.advisories?.[i18n.language] || dashboardData.advisories?.en;

    return (
        <div className="p-4 md:p-8">
            <h2 className="mb-8 text-3xl font-bold text-center text-green-800">Your Farm Dashboard</h2>
            
            {/* Alerts & Reminders Section */}
            <div className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-gray-700">Alerts & Reminders</h3>
                <div className="space-y-4">
                    <div className="flex items-center p-4 space-x-4 text-yellow-800 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-md">
                        <i className="text-2xl fa-solid fa-cloud-sun-rain"></i>
                        <div>
                            <h4 className="font-bold">Weather Alert</h4>
                            <p>{currentAdvisory}</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 space-x-4 text-blue-800 bg-blue-100 border-l-4 border-blue-500 rounded-lg shadow-md">
                        <i className="text-2xl fa-solid fa-droplet"></i>
                        <div>
                            <h4 className="font-bold">Irrigation Reminder</h4>
                            <p>It's time to water your maize crop.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress & Badges */}
            <div className="grid gap-8 md:grid-cols-2">
                <div className="p-6 bg-white shadow-md rounded-xl">
                    <h3 className="mb-4 text-xl font-bold text-green-800">{t('progress')}</h3>
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-600">Harvest Ready</span>
                        <span className="font-bold text-green-600">90%</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded-full"><div className="h-4 bg-green-500 rounded-full" style={{ width: `90%` }}></div></div>
                </div>
                <div className="p-6 bg-white shadow-md rounded-xl">
                    <h3 className="mb-4 text-xl font-bold text-green-800">{t('badges')}</h3>
                    <div className="flex justify-around text-center">
                        <div className="text-green-500"><div className="mb-1 text-5xl">🥇</div><span className="text-xs font-medium">{t('firstHarvest')}</span></div>
                        <div className="text-gray-300"><div className="mb-1 text-5xl">💧</div><span className="text-xs font-medium">{t('savedWater')}</span></div>
                        <div className="text-green-500"><div className="mb-1 text-5xl">🛡️</div><span className="text-xs font-medium">{t('pestControlPro')}</span></div>
                    </div>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="p-6 mt-8 bg-white shadow-md rounded-xl">
                <h3 className="mb-4 text-xl font-bold text-green-800">{t('leaderboard')}</h3>
                {dashboardData.leaderboard.map((player, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                        <span className="font-semibold text-gray-700">{index + 1}. {player.name}</span>
                        <span className="font-bold text-green-600">{player.yield} kg/acre</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;