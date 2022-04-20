import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCitation } from '../../../api/chicago';
import { Input } from '../../../components';

function SingleField({ field, citation, setCitation }) {
  return (
    <Input
      label={field.label}
      value={citation[field.key]}
      onChange={(e) => setCitation({ ...citation, [field.key]: e.target.value })}
      width="w-96"
    />
  );
}

const mapStateToProps = (state) => ({
  citation: state.chicago.citation,
});

const mapDispatchToProps = (dispatch) => ({
  setCitation: bindActionCreators(setCitation, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleField);
