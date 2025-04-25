import React from 'react';

const FaqPage = () => (
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

export default FaqPage; 