import { createStackNavigator, createAppContainer } from 'react-navigation';
import MedicamentDetailComponent from '../features/medicamentdetail/medicamentdetail.component';
import StartComponent from '../features/start/start.component';
import { DrawerMedicament } from '../features/medicament/drawer';


const Root = createStackNavigator(
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

export const RootStack = createAppContainer(Root);