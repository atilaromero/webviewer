import React from 'react';
import Init from '../containers/Init'
import Search from '../containers/Search';
import Panel from '../containers/Panel';
import Results from '../containers/Results';
import Details from '../containers/Details';


function App(){
  return (
    <div>
      
      <Search/>
      <Panel/>
      <Results/>
      <Details/>
    </div>
  );
}

export default App;
/* 
      <Doc order='0'/>
      <Doc order='1'/>
      <Doc order='2'/>
      <Doc order='3'/>
      <Doc order='4'/>
      <Doc order='5'/>
      <Doc order='6'/>
      <Doc order='7'/>
      <Doc order='8'/>
      <Doc order='9'/>
      <Doc order='10'/>
*/