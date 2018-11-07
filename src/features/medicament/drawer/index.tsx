import { createDrawerNavigator } from 'react-navigation';
import MedicamentComponent from '../medicament.component';
import MenuMedicamentComponent from '../menu/menu-medicament.component';

export const DrawerMedicament = createDrawerNavigator(
  {
    Medicament: {
      screen: MedicamentComponent,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
      },
    },
  },
  {
    contentComponent: MenuMedicamentComponent,
  }
);