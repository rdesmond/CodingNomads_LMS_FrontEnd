import React from 'react';
import './DocOptions.css';
import PropTypes from 'prop-types';

export const DocOptions = ({ docs, handleSelectDoc, deleteDoc, id, docSelected }) => {
  const docOptions = docs.map((doc, index) => {
    return (
      <option 
        key={`doc-${index}`} 
        name="documentation"
        value={doc.id}
      >
        {doc.topic}
      </option>
    );
  });

  return (
    <div>
      <select 
        name=""
        value={docSelected && docSelected.id}
        onChange={(event) => handleSelectDoc(event)}
      >
        <option value='' selected></option>
        { docOptions }
      </select>
      <button 
        onClick={(event) => deleteDoc(event, id)}
      >
        del
      </button>
    </div>
  );
};

DocOptions.propTypes = {
  handleSelectDoc: PropTypes.func,
  docs: PropTypes.array
};