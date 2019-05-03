import React from 'react';
import PropTypes from 'prop-types'

function Doc(props){
  return (
    <div>
      {'Source: '}{props.doc.source}
      {' | ID: '}{props.doc.id}
      {' | Nome: '}{props.doc.details? props.doc.details.properties.nome:''}
      <hr/>
    </div>
  );
}


Doc.propTypes = {
  doc: PropTypes.object.isRequired,
}

export default Doc;