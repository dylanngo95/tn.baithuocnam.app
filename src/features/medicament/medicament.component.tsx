import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import NavigationBar from '../../components/navigationbar';

export interface MedicamentProps {
}

export interface MedicamentState {
}

const ComponentLeft = () => {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start' }} >
      <Image
        source={require('../../../assets/images/ic_search.png')}
        style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 10, alignSelf: 'flex-start' }}
      />
    </View>
  );
};

const ComponentCenter = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../../assets/images/ic_google.png')}
        style={{ resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
      />
    </View>
  );
};

const ComponentRight = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../../assets/images/ic_profile.png')}
        style={{ resizeMode: 'contain', width: 35, height: 35, marginRight: 10, alignSelf: 'flex-end' }}
      />
    </View>
  );
};

export default class MedicamentComponent extends React.Component<MedicamentProps, MedicamentState> {
  constructor(props: MedicamentProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          componentLeft={<ComponentLeft />}
          componentCenter={<ComponentCenter />}
          componentRight={<ComponentRight />}
          navigationBarStyle={{ backgroundColor: '#ffffff' }}
          statusBarStyle={{ barStyle: 'dark-content', backgroundColor: '#ffffff' }}
        />
        <Text>Medicament Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
