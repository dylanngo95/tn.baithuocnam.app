import * as React from 'react';
import { createBottomTabNavigator, DrawerNavigator } from 'react-navigation';
import { Image, StyleSheet, StyleProp, ImageStyle } from 'react-native';

import HomeComponent from '../../features/home/home.component';
import MedicamentComponent from '../../features/medicament/medicament.component';
import SettingComponent from '../../features/setting/setting.component';
import { DrawerMedicament } from '../../features/medicament/drawer';
import MedicamentDetailComponent from '../../features/MedicamentDetail/MedicamentDetail';

export const images = {
  language: require('../../../assets/images/ic_language.png'),
  public: require('../../../assets/images/ic_public.png'),
  setting: require('../../../assets/images/ic_setting.png'),
  home: require('../../../assets/images/ic_home.png'),
};

export const TabbarCustom = createBottomTabNavigator(
  {
    Home: {
      screen: MedicamentDetailComponent,
    },
    Medicament: {
      screen: DrawerMedicament,
    },
    Setting: {
      screen: SettingComponent,
    },
  },
  {
    initialRouteName: 'Medicament',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      scrollEnabled: false,
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 12, fontWeight: 'normal'},
    },
    animationEnabled: false,
    lazy: false,
    swipeEnabled: false,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
            return <Image
              style={{ width: 25, height: 25, tintColor: tintColor } as StyleProp<ImageStyle>}
              source={images.public}/>;
        } else if (routeName === 'Medicament') {
          return <Image
            style={{ width: 25, height: 25, tintColor: tintColor } as StyleProp<ImageStyle>}
            source={images.language}/>;
        } else if (routeName === 'Setting') {
          return <Image
            style={{ width: 25, height: 25, tintColor: tintColor } as StyleProp<ImageStyle>}
            source={images.setting}/>;
        }
        return <Image
          style={{ width: 25, height: 25, tintColor: tintColor } as StyleProp<ImageStyle>}
          source={images.public} />;
      },
    }),
  }
);

const styles = StyleSheet.create({
  title_tabbar: {
    fontSize: 12,
    fontWeight: '600',
  },
});