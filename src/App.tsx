import React from 'react';
import Router from './Router';

import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {View} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1, backgroundColor: '#2c1338'}}>
          <Router />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
