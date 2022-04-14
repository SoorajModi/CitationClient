/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Input } from '../../components';
import { setCitation } from '../../api/chicago';

function Chicago({ citation, setCitation }) {
  const fields = [
    { label: 'Title', key: 'title' },
    { label: 'Publisher', key: 'publisher' },
    { label: 'Place of Publication', key: 'place_of_publication' },
    { label: 'Year of Publication', key: 'year_of_publication' },
    { label: 'Edition', key: 'edition' },
    { label: 'URL/DOI', key: 'url_doi' },
    { label: 'Editors', key: 'editors', subfield: [{ label: 'First', key: 'firstName' }, { label: 'Last', key: 'lastName' }] },
    { label: 'Authors', key: 'authors', array: { subfield: [{ label: 'First', key: 'firstName' }, { label: 'Last', key: 'lastName' }] } },
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
            // eslint-disable-next-line no-nested-ternary
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
              : field.array
                ? (
                  <div className="flex flex-col space-y-5">
                    <div className="flex flex-row items-center space-x-3">
                      <span>{field.label}</span>
                      <Button
                        text="-"
                        size="small"
                        onClick={() => {
                          if (citation[field.key] && Object.keys(citation[field.key]).length > 0) {
                            const state = citation[field.key];
                            delete state[Object.keys(citation[field.key]).length - 1];
                            setCitation({ ...citation, [field.key]: state });
                          }
                        }}
                      />
                      <Button
                        text="+"
                        size="small"
                        onClick={() => {
                          if (citation[field.key]) {
                            setCitation({ ...citation, [field.key]: { ...citation[field.key], [Object.keys(citation[field.key]).length]: { firstName: '', lastName: '' } } });
                          } else {
                            setCitation({ ...citation, [field.key]: { 0: { firstName: '', lastName: '' } } });
                          }
                        }}
                      />
                      <Button
                        text="Reset"
                        size="small"
                        onClick={() => {
                          setCitation({ ...citation, [field.key]: [] });
                        }}
                      />
                    </div>
                    <div className="space-y-5">
                      { citation[field.key] && Object.keys(citation[field.key]).map((_, index) => (
                        <div key={index} className="flex flex-row space-x-5">
                          {
                          field.array.subfield.map((sub) => (
                            <Input
                              label={sub.label}
                              value={citation[field.key][index] && citation[field.key][index][sub.key]}
                              onChange={(e) => setCitation({
                                ...citation,
                                [field.key]: {
                                  ...citation[field.key],
                                  [index]: {
                                    ...citation[field.key][index],
                                    [sub.key]: e.target.value,
                                  },
                                },
                              })}
                              width="w-60"
                            />
                          ))
                        }
                        </div>
                      ))}
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

const mapStateToProps = (state) => ({
  citation: state.chicago.citation,
});

const mapDispatchToProps = (dispatch) => ({
  setCitation: bindActionCreators(setCitation, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chicago);
