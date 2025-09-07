import React from 'react';
import { useTranslation } from 'react-i18next';
import { SunIcon, WaterDropIcon } from '../assets/icons.jsx'; // Using local SVG icons

const Dashboard = ({ user }) => {
    const { t } = useTranslation();

    return (
        <div className="p-4 space-y-6 md:p-6">
            {/* Weather Snapshot */}
            <div className="flex items-center justify-between p-6 text-white shadow-lg bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl">
                <div>
                    <p className="text-2xl font-bold">Bhubaneswar</p>
                    <p className="text-5xl font-extrabold">32°C</p>
                    <p>Partly Cloudy</p>
                </div>
                <div className="text-7xl opacity-80">
                    <i className="fa-solid fa-cloud-sun"></i>
                </div>
            </div>

            {/* Quick Action Reminders */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 text-center bg-white shadow-md rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto text-blue-500 bg-blue-100 rounded-full"><WaterDropIcon /></div>
                    <p className="mt-2 font-bold">Irrigate Field</p>
                    <p className="text-sm text-gray-500">Today, 5 PM</p>
                </div>
                <div className="p-4 text-center bg-white shadow-md rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto text-yellow-500 bg-yellow-100 rounded-full"><SunIcon /></div>
                    <p className="mt-2 font-bold">Apply Fertilizer</p>
                    <p className="text-sm text-gray-500">Tomorrow</p>
                </div>
            </div>

            {/* Crop Progress */}
            <div className="p-6 bg-white shadow-md rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">{t('progress')}</h3>
                <div className="flex items-center justify-between mb-2 font-bold">
                    <span>🌱 Germination</span>
                    <span className="text-green-600">45%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full"><div className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-green-500" style={{ width: `45%` }}></div></div>
            </div>
            
            {/* Badges & Leaderboard */}
            <div className="p-6 bg-white shadow-md rounded-2xl">
                <h3 className="mb-4 text-xl font-bold text-gray-800">Achievements</h3>
                <div className="flex items-center justify-around">
                    <div>
                        <p className="font-bold text-center">Badges Earned</p>
                        <div className="flex justify-center mt-2 space-x-4">
                           <div className="text-5xl" title="First Harvest">🥇</div>
                           <div className="text-5xl opacity-30" title="Water Saver">💧</div>
                           <div className="text-5xl" title="Pest Control Pro">🛡️</div>
                        </div>
                    </div>
                    <div className="w-px h-16 bg-gray-200"></div>
                    <div>
                         <p className="font-bold text-center">Leaderboard</p>
                         <p className="mt-2 text-2xl font-bold text-center text-green-600">#5 <span className="text-sm font-normal text-gray-500">in your region</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;