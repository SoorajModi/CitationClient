import React from 'react';
import Image from '../../../assets/CiteBot.png';

function Project() {
  return (
    <div className="flex w-full justify-center items-center space-x-36">
      <div className="flex">
        <img src={Image} alt="demo of live feedback" className="w-96" />
      </div>
      <div className="flex flex-col space-y-5">
        <span className="text-4xl font-light">Project</span>
        <span className="text-lg text-gray-400 w-60 leading-loose">Save citations to projects and edit them in the future. Never lose a citation again!</span>
      </div>
    </div>
  );
}

export default Project;
