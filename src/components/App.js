import React from 'react';
import Init from '../containers/Init'
import Search from '../containers/Search';
import Panel from '../containers/Panel';
import Results from '../containers/Results';
import Doc from '../containers/Doc';


function App(){
  return (
    <div>
      <Init/>
      <Search/>
      <Panel/>
      <Results/>
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
    </div>
  );
}

export default App;
