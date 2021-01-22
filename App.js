import React from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './src/navigator';
import store from './src/store';

export default App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}
