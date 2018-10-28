import { createStackNavigator } from 'react-navigation';
import { TabbarCustom } from './tabbar';
import { Text } from 'react-native';

export const RootStack = createStackNavigator(
  {
    Main: {
      screen: TabbarCustom,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);