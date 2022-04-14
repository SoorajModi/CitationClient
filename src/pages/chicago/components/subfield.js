import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input } from '../../../components';
import { setCitation } from '../../../api/chicago';

function Subfield({ field, citation, setCitation }) {
  return (
    <div className="flex flex-col">
      <span>{field.label}</span>
      <div className="flex flex-row space-x-5">
        {
          field.subfield.map((sub) => (
            <Input
              label={sub.label}
              value={citation[field.key] && citation[field.key][sub.key]}
              onChange={(e) => setCitation({
                ...citation,
                [field.key]: { ...citation[field.key], [sub.key]: e.target.value },
              })}
              width="w-60"
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(Subfield);
