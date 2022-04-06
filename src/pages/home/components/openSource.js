import React from 'react';

function OpenSource() {
  return (
    <div className="flex flex-col space-y-5 w-full items-center justify-center text-center">
      <span className="text-4xl font-light">Support Us</span>
      <span className="text-lg text-gray-400 w-[40rem] leading-loose">
        Citation App is 100% free and open source. Please donate so we can continue to build awesome features and keep
        Citation App free. You could also build those features yourself ;).
      </span>
      <button
        type="button"
        onClick={() => console.log('Pressed button')}
        className="inline-block px-14 py-2.5 w-40 bg-teal-600 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Donate
      </button>
      <button
        type="button"
        onClick={() => console.log('Pressed button')}
        className="inline-block px-14 py-2.5 w-40 bg-white border-teal-600 border text-teal-600 hover:text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teak-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        GitHub
      </button>
    </div>
  );
}

export default OpenSource;
