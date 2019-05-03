import React from 'react';
import App from './App';
import {create} from 'react-test-renderer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'

it('renders without crashing', () => {
  const store = createStore(rootReducer)
  const component = create(
    <Provider store={store}>
      <App/>
    </Provider>
  )
});
