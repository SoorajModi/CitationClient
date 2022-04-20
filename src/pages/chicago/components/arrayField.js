import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCitation } from '../../../api/chicago';
import { Button, Input } from '../../../components';

function ArrayField({ field, citation, setCitation }) {
  return (
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
              setCitation({ ...citation, [field.key]: { ...citation[field.key], [Object.keys(citation[field.key]).length]: { first: '', last: '' } } });
            } else {
              setCitation({ ...citation, [field.key]: { 0: { first: '', last: '' } } });
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
          // eslint-disable-next-line react/no-array-index-key
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
  );
}

const mapStateToProps = (state) => ({
  citation: state.chicago.citation,
});

const mapDispatchToProps = (dispatch) => ({
  setCitation: bindActionCreators(setCitation, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArrayField);
