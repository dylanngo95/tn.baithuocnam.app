import * as React from 'react';
import {
  View, StyleSheet, Text,
  WebView,
  Platform,
} from 'react-native';

const localWeb = require('../../../html/FileTets.html');

export interface MedicamentDetailProps {
}

export interface MedicamentDetailState {
}

export default class MedicamentDetailComponent extends React.Component<MedicamentDetailProps, MedicamentDetailState> {
  constructor(props: MedicamentDetailProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <WebView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginTop: (Platform.OS) === 'ios' ? 20 : 0,
          }}
          source={localWeb}
          javaScriptEnabled={true}
          domStorageEnabled={true} />
      </View>
    );
  }
}
