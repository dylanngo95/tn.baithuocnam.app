import { createDrawerNavigator } from 'react-navigation';
import MenuMedicamentComponent from '../menu/menu-medicament.component';
import MedicamentComponent from '../medicament.component';

export const DrawerMedicament = createDrawerNavigator(
  {
    Medicament: {
      screen: MedicamentComponent,
    },
    MenuMedicament: {
      screen: MenuMedicamentComponent,
    },
  }
);