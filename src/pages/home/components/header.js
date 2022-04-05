import React from 'react';
import { useNavigate } from 'react-router-dom';
import CiteBot from '../../../assets/CiteBot.png';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full">
      <img src={CiteBot} alt="Robot" className="h-96" />
      <div className="flex flex-col text-center space-y-10 items-center">
        <span className="text-5xl">Build a citation</span>
        <div className="flex flex-col space-y-3 w-56">
          <button
            type="button"
            onClick={() => navigate('/chicago')}
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Chicago
          </button>
          <button
            type="button"
            onClick={() => navigate('/apa')}
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            APA
          </button>
          <button
            type="button"
            onClick={() => navigate('/MLA')}
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            MLA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
