import React from 'react';
import PropTypes from 'prop-types'

class Doc extends React.Component{

  //constructor(props){
  //  super(props);
  //  console.log('setting <DOC>...');
  //  console.log(props);
  //}

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps.ready)
    return (nextProps.ready || this.props.ready)
  }

  render(){
    console.log('<DOC>')

    //const src = this.props.source
    //const id = parseInt(this.props.id, 10)

    const order = parseInt(this.props.order, 10)

    const docs = this.props.docs;
    //const doc = docs.find(obj => (obj.details.source === src && obj.details.id === id))
    //console.log(doc)

    console.log(`order:${order}, length:${docs.length}`)
   
    if(this.props.ready===false)
      return (
        <div>

        </div>
      );

    if (docs.length > order) {
      //console.log(docs[order])
      const doc = docs[order].details
      return (
        <div>
          {'Source: '}{doc.source}
          {' | ID: '}{doc.id}
          {' | Nome: '}{doc.details.properties.nome}
          <hr/>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      ); 
    } 
  }
}


Doc.propTypes = {
  docs: PropTypes.array.isRequired,
}

export default Doc;