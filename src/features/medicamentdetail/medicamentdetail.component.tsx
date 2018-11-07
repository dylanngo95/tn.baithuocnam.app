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


export interface MedicamentDetailProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface MedicamentDetailState {
  content: any;
}


export default class MedicamentDetailComponent extends React.Component<MedicamentDetailProps, MedicamentDetailState> {
  constructor(props: MedicamentDetailProps) {
    super(props);
    this.state = {
      content: '',
    };
  }

  public componentDidMount() {
    const str1 = `<html><head><style type=\"text/css\">@font-face{font-family:MyFont;src:url(\"file:///android_asset/fonts/UVNVan_R.ttf\");}@font-face{font-family:MyFontBold;src:url(\"file:///android_asset/fonts/UVNVan.ttf\");}*{-webkit-user-select:none}body{font-family:MyFont;text-align:justify;padding:3px 5px;color:#2f2f2d;} b{font-family:MyFontBold;} .title{font-family:MyFontBold;}</style></head><body>`;
    const str2 = `</body></html>`;
    const body =  AESUtil.decryption(this.props.navigation.state.params.content.content);
    body.replace('font-family', 'font-family-xxx');
    body.replace('font-size', 'font-size-xxx');
    body.replace('h1', 'center');
    body.replace('size=', 'size=-xxx');

    this.setState({
      content: str1 + body + str2,
    });
  }

  private ComponentLeft = () => (navigation: NavigationScreenProp<any, any>) => () =>
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{ flex: 1, alignItems: 'flex-start' }} >
      <Image
        source={require('../../../assets/images/icon_arrow_back.png')}
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
        <WebView
          style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            width: '100%',
            marginTop: (Platform.OS) === 'ios' ? 20 : 0,
          }}
          source={{ html: this.state.content }}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}
