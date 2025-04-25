import React from 'react';

const SettingsPage = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold">Settings</h2>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span>Dark Mode</span>
        <div className="w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer">
          <div className="bg-white w-4 h-4 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>Notifications</span>
        <div className="w-12 h-6 bg-blue-600 rounded-full p-1 cursor-pointer">
          <div className="bg-white w-4 h-4 rounded-full transform translate-x-6"></div>
        </div>
      </div>
      <div className="pt-2">
        <button className="text-red-600">Clear All Data</button>
      </div>
    </div>
  </div>
);

export default SettingsPage; 