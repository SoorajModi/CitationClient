import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { book } from 'chicagomanualofstyle';
import { Input } from '../../../components';

function Output({ citation }) {
  const [value, setValue] = useState('Title is required.');

  useEffect(() => {
    console.log(citation);
    if (citation.title) {
      setValue(book(citation, []).bibliography);
    } else {
      setValue('Title is required.');
    }
  }, [citation]);

  return <Input value={value} disabled width="w-96" />;
}

const mapStateToProps = (state) => ({
  citation: state.chicago.citation,
});

export default connect(mapStateToProps, null)(Output);
