/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCitation } from '../../api/chicago';
import SingleField from './components/singleField';
import ArrayField from './components/arrayField';
import Subfield from './components/subfield';

function Chicago({ citation }) {
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

  useEffect(() => {
    console.log(citation);
  }, [citation]);

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
              ? <Subfield field={field} />
              : field.array
                ? <ArrayField field={field} />
                : <SingleField field={field} />
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
