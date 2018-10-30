import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../components/header.component';

const ComponentLeft = () =>
  <View style={{ flex: 1, alignItems: 'flex-start' }} >
    <Image
      source={require('../../../assets/images/ic_menu.png')}
      style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 10, alignSelf: 'flex-start' }}
    />
  </View>;

export interface MedicamentProps {
}

export interface MedicamentState {
}


export default class MedicamentComponent extends React.Component<MedicamentProps, MedicamentState> {
  constructor(props: MedicamentProps) {
    console.log('medicament is render');
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <HeaderComponent
          componentLeft={ComponentLeft}
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
