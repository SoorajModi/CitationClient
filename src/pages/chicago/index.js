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
    { label: 'Authors', key: 'authors', subfield: [{ label: 'First', key: 'firstName' }, { label: 'Last', key: 'lastName' }] },
    { label: 'Editors', key: 'editors', subfield: [{ label: 'First', key: 'firstName' }, { label: 'Last', key: 'lastName' }] },
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
            field.subfield
              ? (
                <div className="flex flex-col">
                  <span>{field.label}</span>
                  <div className="flex flex-row space-x-5">
                    {
                      field.subfield.map((sub) => (
                        <Input
                          label={sub.label}
                          value={citation[field.key] && citation[field.key][sub.key]}
                          onChange={(e) => setCitation({ ...citation, [field.key]: { ...citation[field.key], [sub.key]: e.target.value } })}
                          width="w-60"
                        />
                      ))
                    }
                  </div>
                </div>
              )
              : (
                <Input
                  label={field.label}
                  value={citation[field.key]}
                  onChange={(e) => setCitation({ ...citation, [field.key]: e.target.value })}
                  width="w-96"
                />
              )
          ))
        }
      </div>
    </div>
  );
}

export default Chicago;
