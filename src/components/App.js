import React from 'react';
import Search from '../containers/Search';
import Sources from '../containers/Sources';
import Results from '../containers/Results';
import Details from '../containers/Details';


function App(){
  return (
    <div>
      <Search/>
      <Sources/>
      <Results/>
      <Details/>
    </div>
  );
}

export default App;
