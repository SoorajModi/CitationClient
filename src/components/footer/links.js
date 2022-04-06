import React from 'react';

function Links() {
  return (
    <div>
      <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Links</h6>
      <p className="mb-4">
        <a href="/donate" className="text-gray-600">Donate</a>
      </p>
      <p className="mb-4">
        <a href="/settings" className="text-gray-600">Settings</a>
      </p>
      <p>
        <a href="/help" className="text-gray-600">Help</a>
      </p>
    </div>
  );
}

export default Links;
