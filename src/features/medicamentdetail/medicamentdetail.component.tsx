import * as React from 'react';
import {
  View, StyleSheet, Text,
  WebView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import HeaderComponent from '../../components/header.component';
import { NavigationScreenProp } from 'react-navigation';
import { AESUtil } from '../../common/util/aes.util';

const localWeb = require('../../../html/FileTets.html');

export interface MedicamentDetailProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface MedicamentDetailState {
  content: any;
}

export default class MedicamentDetailComponent extends React.Component<MedicamentDetailProps, MedicamentDetailState> {
  constructor(props: MedicamentDetailProps) {
    super(props);
    console.log(this.props.navigation);
    this.state = {
      content: AESUtil.decryption(this.props.navigation.state.params.content.content),
    };
  }

  private ComponentLeft = () => (navigation: NavigationScreenProp<any, any>) => () =>
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{ flex: 1, alignItems: 'flex-start' }} >
      <Image
        source={require('../../../assets/images/ic_left_arrow.png')}
        style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 16, alignSelf: 'flex-start' }}
      />
    </TouchableOpacity>

  public render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <HeaderComponent
          componentLeft={this.ComponentLeft()(this.props.navigation)}
        />
        {/* <WebView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            marginTop: (Platform.OS) === 'ios' ? 20 : 0,
          }}
          source={{ html: this.state.content }}
          /> */}
      </View>
    );
  }
}
