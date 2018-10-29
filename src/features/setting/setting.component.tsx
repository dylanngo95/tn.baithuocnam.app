import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface SettingProps {
}

export interface SettingState {
}

export default class SettingComponent extends React.Component<SettingProps, SettingState> {
  constructor(props: SettingProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>Setting Component</Text>
      </View>
    );
  }
}
