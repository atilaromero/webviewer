import React from 'react';
import PropTypes from 'prop-types'

function Doc(props){
  console.log('<DOC>')
    
  var s = ''

  if (props.docs) {
    s = props.docs.toString()  
  } else {
    s = ' - nao'
  } 

  return(
    <div>
      {'Ready '}
      {s} 
    </div>
  )
}

/* 
class Doc extends React.Component{

  constructor(props){
    super(props);
    console.log('setting <DOC>...');
    console.log(props);
  }

  render(){
    console.log('<DOC>')
    
    var s = ''

    if (this.props.docs) {
      s = this.props.docs.toString()  
    } else {
      s = ' - nao'
    } 
      return (
        <div>
          {'Ready '}
          {s} 
        </div>
      );

  }
}
*/

Doc.propTypes = {
  docs: PropTypes.array.isRequired,
}

export default Doc;

/*
  render(){
    console.log('<DOC>')

    if (this.props.ready===true){
      return (
        <div>
          {'Ready!'}
        </div>
      );
    } else {
      return(
        <div>
            Hello {this.props.docs}
        </div>
      );  
    }
  }
*/