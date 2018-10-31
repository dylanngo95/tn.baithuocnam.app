import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface MenuMedicamentProps {
}

export interface MenuMedicamentState {
}

export default class MenuMedicamentComponent extends React.Component<MenuMedicamentProps, MenuMedicamentState> {
  constructor(props: MenuMedicamentProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>MenuMedicament Component</Text>
      </View>
    );
  }
}
