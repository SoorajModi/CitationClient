import React from 'react';
import Button from '../../../components/button';

function SupportUs() {
  return (
    <div className="flex flex-col space-y-10 w-full items-center justify-center text-center">
      <span className="text-4xl font-light">Support Us</span>
      <span className="text-lg text-gray-400 w-[40rem] leading-loose">
        Citation App is 100% free and open source. Please donate so we can continue to build awesome features and keep
        Citation App free. You could also build those features yourself ;).
      </span>
      <div className="flex items-center justify-center space-x-3">
        <Button
          text="Donate"
          onClick={() => alert('Pressed Donate')}
        />
        <Button
          text="Github"
          onClick={() => alert('Pressed GitHub')}
          primaryClass="ghost"
        />
      </div>
    </div>
  );
}

export default SupportUs;
