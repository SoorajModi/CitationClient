import React, { useState } from 'react';
import { Input } from '../../components';

function Chicago() {
  const [citation, setCitation] = useState({});
  const fields = [
    { label: 'Title', key: 'title' },
    { label: 'Publisher', key: 'publisher' },
    { label: 'Place of Publication', key: 'place_of_publication' },
    { label: 'Year of Publication', key: 'year_of_publication' },
    { label: 'Edition', key: 'edition' },
    { label: 'URL/DOI', key: 'url_doi' },
  ];

  return (
    <div className="py-20 px-6 space-y-10">
      <div className="flex flex-col">
        <span className="text-4xl">Chicago Manual of Style (17th edition)</span>
        <span className="text-2xl">Book</span>
      </div>
      <div className="flex flex-col space-y-5">
        {
          fields.map((field) => (
            <Input
              label={field.label}
              value={citation[field.key]}
              onChange={(e) => setCitation({ ...citation, [field.key]: e.target.value })}
              width="w-96"
              key={field.key}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Chicago;
