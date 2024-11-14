import React, { useState } from 'react';

type SeedDisplayProps = {
  mnemonic: string;
};

const SeedDisplay: React.FC<SeedDisplayProps> = ({ mnemonic }) => {
  const [isBlurred, setIsBlurred] = useState<boolean>(true);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // Split the mnemonic into an array of words
  const seedWords = mnemonic.split(' ');

  // Toggle the blur state
  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  // Toggle the collapsed state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="m-4">
      <div className="flex justify-between items-center mb-4">
        <span>{isCollapsed ? 'Show Seed' : 'Hide Seed'}</span>
        <div
          onClick={toggleCollapse}
          className="cursor-pointer w-6 h-6 flex justify-center items-center"
        >
          <svg
            className={`transform transition-transform duration-300 ${
              isCollapsed ? 'rotate-0' : 'rotate-180'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {!isCollapsed && (
        <div>
          <div className="grid grid-cols-3 gap-2">
            {seedWords.map((word, index) => (
              <div
                key={index}
                className={`p-2 bg-gray-800 text-white rounded-md shadow-md ${
                  isBlurred ? 'blur-sm' : ''
                }`}
              >
                {isBlurred ? '*****' : word}
              </div>
            ))}
          </div>
          <button
            onClick={toggleBlur}
            className="mt-4 bg-gray-800 text-white p-2 rounded-md shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            {isBlurred ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default SeedDisplay; 