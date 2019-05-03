import React from 'react';
import PropTypes from 'prop-types'

function Doc(props){
  return (
    <div>
      {'Source: '}{props.doc.details.source}
      {' | ID: '}{props.doc.details.id}
      {' | Nome: '}{props.doc.details.properties.nome}
      <hr/>
    </div>
  );
}


Doc.propTypes = {
  doc: PropTypes.object.isRequired,
}

export default Doc;