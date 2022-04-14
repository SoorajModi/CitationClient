import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCitation } from '../../api/chicago';
import SingleField from './components/singleField';
import ArrayField from './components/arrayField';
import Subfield from './components/subfield';
import Output from './components/output';

function Chicago({ source }) {
  const fields = [
    { label: 'Title', key: 'title' },
    { label: 'Publisher', key: 'publisher' },
    { label: 'Place of Publication', key: 'placeOfPublication' },
    { label: 'Year of Publication', key: 'yearOfPublication' },
    { label: 'Edition', key: 'edition' },
    { label: 'URL/DOI', key: 'url' },
    { label: 'Authors', key: 'authors', array: { subfield: [{ label: 'First', key: 'first' }, { label: 'Last', key: 'first' }] } },
    { label: 'Editors', key: 'editors', array: { subfield: [{ label: 'First', key: 'first' }, { label: 'Last', key: 'first' }] } },
  ];

  return (
    <div className="py-20 px-6 space-y-10">
      <div className="flex flex-col">
        <span className="text-4xl">Chicago Manual of Style (17th edition)</span>
        <span className="text-2xl">{source}</span>
      </div>
      <Output />
      <div className="flex flex-col space-y-5">
        {
          fields.map((field) => (
            // eslint-disable-next-line no-nested-ternary
            field.array
              ? <ArrayField field={field} />
              : field.subfield
                ? <Subfield field={field} />
                : <SingleField field={field} />
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  citation: state.chicago.citation,
  source: state.chicago.source,
});

const mapDispatchToProps = (dispatch) => ({
  setCitation: bindActionCreators(setCitation, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chicago);
