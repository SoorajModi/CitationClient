import React from 'react';
import Image from '../../../assets/CiteBot.png';

function Feedback() {
  return (
    <div className="flex w-full justify-center items-center space-x-36">
      <div className="flex flex-col space-y-3">
        <span className="text-4xl font-light">Feedback</span>
        <span className="text-lg text-gray-400 w-60">Get immediate feedback while building your citation across all edge cases.</span>
      </div>
      <div className="flex">
        <img src={Image} alt="demo of live feedback" className="w-96" />
      </div>
    </div>
  );
}

export default Feedback;
