import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-10 w-full">
      <span className="text-5xl font-light">Everything Citation</span>
      <span className="text-lg w-[30rem] text-gray-400">
        The only citation tool you need! Citation app is designed to build citations with immediate feedback. Save your
        citations under projects and edit them on a later date. Quickly cover all possible edge cases and improve your
        understanding of creating citations. Build your citation now:
      </span>
      <div className="flex items-center justify-center space-x-3 w-56">
        <button
          type="button"
          onClick={() => navigate('/chicago')}
          className="inline-block px-14 py-2.5 w-40 bg-teal-600 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Chicago
        </button>
        <button
          type="button"
          onClick={() => navigate('/apa')}
          className="inline-block px-16 py-2.5 w-40 bg-teal-600 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          APA
        </button>
        <button
          type="button"
          onClick={() => navigate('/MLA')}
          className="inline-block px-16 py-2.5 w-40 bg-teal-600 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          MLA
        </button>
      </div>
    </div>
  );
}

export default Header;
