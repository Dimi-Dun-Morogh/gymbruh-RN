import React from 'react';
import Router from './Router';

import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {View} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Spinner from './components/common/Spinner';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <View style={{flex: 1, backgroundColor: '#2c1338'}}>
          <Router />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
