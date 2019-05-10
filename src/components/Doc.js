import React from 'react';
import PropTypes from 'prop-types'

function Doc({doc, getPreview}){
  return (
    <div>
      {'Source: '}{doc.source}
      {' | ID: '}{doc.id}
      {' | Nome: '}{doc.details? doc.details.properties.nome:''}
      {' | Tamanho: '}{doc.details? doc.details.properties.tamanho:''}
      {' | Preview: '}{doc.preview? <pre>{doc.preview}</pre>:''}
      <button onClick={() => getPreview(doc.source,doc.id)}>
        Preview
      </button>
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
  getPreview: PropTypes.func.isRequired,
}

export default Doc;