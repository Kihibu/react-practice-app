import { useState } from 'react';

type Section = 'faq' | 'about' | 'settings' | 'balance';

const MenuPage = () => {
  const [activeSection, setActiveSection] = useState<Section>('about');

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'faq':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">How do I start training?</h3>
                <p className="text-gray-600">Go to the Training tab and click the "Start Training" button.</p>
              </div>
              <div>
                <h3 className="font-medium">How can I update my profile?</h3>
                <p className="text-gray-600">Visit the Profile tab and edit your information.</p>
              </div>
              <div>
                <h3 className="font-medium">Is my data secure?</h3>
                <p className="text-gray-600">Yes, we use industry-standard encryption to protect your information.</p>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">About the App</h2>
            <p>
              This application is designed to help you track and improve your training progress.
              Our goal is to provide a simple, intuitive interface that makes your training
              journey enjoyable and effective.
            </p>
            <p>
              Version: 1.0.0<br />
              Released: 2023
            </p>
          </div>
        );
      case 'settings':
        return (
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
      case 'balance':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Your Balance</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-2xl font-bold">$128.50</p>
              <p className="text-sm text-gray-600">Available Balance</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Recent Transactions</h3>
              <div className="border-b pb-2">
                <div className="flex justify-between">
                  <span>Premium Subscription</span>
                  <span className="text-red-600">-$9.99</span>
                </div>
                <p className="text-xs text-gray-500">June 15, 2023</p>
              </div>
              <div className="border-b pb-2">
                <div className="flex justify-between">
                  <span>Deposit</span>
                  <span className="text-green-600">+$50.00</span>
                </div>
                <p className="text-xs text-gray-500">June 10, 2023</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>

      <div className="flex space-x-2 border-b overflow-x-auto mb-4 hide-scrollbar">
        <button
          onClick={() => setActiveSection('about')}
          className={`px-4 py-2 whitespace-nowrap ${activeSection === 'about' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
        >
          About the App
        </button>
        <button
          onClick={() => setActiveSection('faq')}
          className={`px-4 py-2 whitespace-nowrap ${activeSection === 'faq' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
        >
          FAQ
        </button>
        <button
          onClick={() => setActiveSection('settings')}
          className={`px-4 py-2 whitespace-nowrap ${activeSection === 'settings' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
        >
          Settings
        </button>
        <button
          onClick={() => setActiveSection('balance')}
          className={`px-4 py-2 whitespace-nowrap ${activeSection === 'balance' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
            }`}
        >
          Balance
        </button>
      </div>

      <div className="mt-4">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default MenuPage; 