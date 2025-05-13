import { useState, useEffect } from 'react';

const FullPageLoader = ({page}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const nextProgress = prevProgress + 1;
        return nextProgress > 100 ? 0 : nextProgress;
      });
    }, 30);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-[500]">
      <div className="w-24 h-24 relative mb-8">
        {/* Main animated circle */}
        <div className="absolute inset-0 border-4 border-t-primary-color border-r-secondary-color border-b-blue-300 border-l-blue-500 rounded-full animate-spin"></div>
        
        {/* Inner pulsing logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <div className="w-12 h-12 bg-primary-color rounded-lg animate-pulse flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div> */}
          <img src="./logo-black.svg" alt="" className='mx-auto my-auto w-[50%]' />
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div 
          className="h-full bg-primary-color transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Loading text */}
      <p className="text-gray-700 font-medium">Loading your {page}</p>
    </div>
  );
};

export default FullPageLoader;