import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './stores/index';
import SplashComponent from './features/splash/splash.component';

interface AppProps {
}

const App: React.SFC<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <SplashComponent />
    </Provider>
  );
};

export default App;