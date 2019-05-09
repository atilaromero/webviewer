import React from 'react';
import PropTypes from 'prop-types'

function Doc({doc}){
  return (
    <div>
      {'Source: '}{doc.source}
      {' | ID: '}{doc.id}
      {' | Nome: '}{doc.details? doc.details.properties.nome:''}
      <hr/>
    </div>
  );
}


Doc.propTypes = {
  doc: PropTypes.shape({
    source: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    details: PropTypes.object,
  }).isRequired,
}

export default Doc;