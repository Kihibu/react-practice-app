import React from 'react';

const BalancePage = () => (
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

export default BalancePage; 