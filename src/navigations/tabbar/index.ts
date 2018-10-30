import { createBottomTabNavigator } from 'react-navigation';
import HomeComponent from '../../features/home/home.component';
import MedicamentComponent from '../../features/medicament/medicament.component';
import SettingComponent from '../../features/setting/setting.component';

export const TabbarCustom = createBottomTabNavigator(
  {
    Home: {
      screen: HomeComponent,
    },
    Medicament: {
      screen: MedicamentComponent,
    },
    Setting: {
      screen: SettingComponent,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    lazy: false,
    swipeEnabled: false,
  }
);