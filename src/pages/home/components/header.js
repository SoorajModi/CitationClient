import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-10 w-full">
      <span className="text-5xl font-light">Everything Citation</span>
      <span className="text-lg w-[30rem] text-gray-400 leading-loose">
        The only citation tool you need! Citation app is designed to build citations with immediate feedback. Save your
        citations under projects and edit them on a later date. Quickly cover all possible edge cases and improve your
        understanding of creating citations. Build your citation now:
      </span>
      <div className="flex items-center justify-center space-x-3">
        <Button
          text="Chicago"
          onClick={() => navigate('/chicago')}
        />
        <Button
          text="APA"
          onClick={() => navigate('/apa')}
        />
        <Button
          text="MLA"
          onClick={() => navigate('/mla')}
        />
      </div>
    </div>
  );
}

export default Header;
