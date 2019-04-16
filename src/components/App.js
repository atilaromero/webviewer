import React from 'react';
import Init from '../containers/Init'
import Search from '../containers/Search';
import Panel from '../containers/Panel';
import Results from '../containers/Results';


function App(){
  return (
    <div>
      <Init/>
      <Search/>
      <Panel/>
      <Results/>
    </div>
  );
}

export default App;
