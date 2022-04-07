import React, { useState } from 'react';
import { Input } from '../../components';

function Chicago() {
  const [title, setTitle] = useState(null);

  return (
    <div className="py-20 px-6 space-y-32">
      <div className="flex flex-col">
        <span className="text-4xl">Chicago Manual of Style (17th edition)</span>
        <span className="text-2xl">Book</span>
      </div>
      <div className="flex flex-col">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          width="w-96"
        />
      </div>
    </div>
  );
}

export default Chicago;
