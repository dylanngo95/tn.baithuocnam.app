import { createStackNavigator } from 'react-navigation';
import MedicamentDetailComponent from '../features/medicamentdetail/medicamentdetail.component';
import StartComponent from '../features/start/start.component';

export const RootStack = createStackNavigator(
  {
    Start: {
      screen: StartComponent,
      navigationOptions: {
        header: null,
      },
    },
    MedicamentDetail: {
      screen: MedicamentDetailComponent,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Start',
  }
);