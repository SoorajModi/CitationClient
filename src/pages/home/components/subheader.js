import React from 'react';

function Subheader({
  title, message, source, alt, reverse = false,
}) {
  return (
    <div className={`flex w-full justify-center items-center space-x-36 ${reverse ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
      <div className="flex flex-col space-y-5">
        <span className="text-4xl font-light">{title}</span>
        <span className="text-lg text-gray-400 w-60 leading-loose">{message}</span>
      </div>
      <div className="flex">
        <img src={source} alt={alt} className="w-96" />
      </div>
    </div>
  );
}

export default Subheader;
