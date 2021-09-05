import React from 'react';
import Router from './Router';

import {Provider} from 'react-redux';
import {store} from './redux/store';
import {View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: '#2c1338'}}>
        <Router />
      </View>
    </Provider>
  );
};

export default App;
