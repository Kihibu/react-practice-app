import { useState } from 'react';

const TrainingPage = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartTraining = () => {
    setIsStarted(true);
    // Add your training logic here
    setTimeout(() => {
      setIsStarted(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <button
        onClick={handleStartTraining}
        disabled={isStarted}
        className={`
          px-8 py-4 text-lg font-medium rounded-lg shadow-lg transform transition-all
          ${isStarted
            ? 'bg-green-500 text-white scale-95'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'}
        `}
      >
        {isStarted ? 'Training...' : 'Start Training'}
      </button>
    </div>
  );
};

export default TrainingPage; 