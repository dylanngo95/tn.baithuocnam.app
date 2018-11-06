import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './stores/index';
import StartComponent from './features/start/start.component';


interface AppProps {
}

const App: React.SFC<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <StartComponent />
    </Provider>
  );
};

export default App;