import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export interface ButtonCustomProps {
  onPress: any;
  styleButtom: any;
  styleText: any;
  textButtom: any;
}

const ButtomCustom = (props: ButtonCustomProps) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={props.styleButtom}
  >
    <Text
      style={props.styleText}
    >{props.textButtom}</Text>
  </TouchableOpacity>
);

export default ButtomCustom;
