import * as React from 'react';
import {
  View, StyleSheet, Text,
  WebView,
  Platform,
  TouchableOpacity,
  Image, Dimensions,
} from 'react-native';
import HeaderComponent from '../../components/header.component';
import { NavigationScreenProp } from 'react-navigation';
import { AESUtil } from '../../common/util/aes.util';


export interface MedicamentDetailProps {
  navigation: NavigationScreenProp<any, any>;
}

export interface MedicamentDetailState {
  content: string;
  title: string;
}


export default class MedicamentDetailComponent extends React.Component<MedicamentDetailProps, MedicamentDetailState> {
  constructor(props: MedicamentDetailProps) {
    super(props);
    this.state = {
      content: '',
      title: this.props.navigation.state.params.content.title,
    };
  }

  public componentDidMount() {

    const width = Dimensions.get('window').width - 20;
    const str1 = `<html><head><style type="text/css"> * { -webkit-user-select: none } body { font-family: Arial, Helvetica, sans-serif; text-align: justify; padding: 3px 5px; color: #2f2f2d; } b { font-family: Arial, Helvetica, sans-serif; font-size: large; font-weight: 600; } p img { max-width: ${width}px; max-height: auto; } .title { font-family: Arial, Helvetica, sans-serif; font-size: larger; font-weight: 700; }</style></head><body>`;
    const str2 = `</body></html>`;
    const body = AESUtil.decryption(this.props.navigation.state.params.content.content);
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

  private ComponentCenter = () => (title: string) => () =>
    <View style={styles.title}>
      <Text
        numberOfLines={1}
        style={styles.title_text}>
        {title}
      </Text>
    </View>

  public render() {
    return (
      <View
        style={styles.container}
      >
        <HeaderComponent
          componentLeft={this.ComponentLeft()(this.props.navigation)}
          componentCenter={this.ComponentCenter()(this.state.title)}
        />
        <WebView
          style={styles.webview}
          source={{ html: this.state.content }}
          scalesPageToFit={true}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 2.5,
    fontFamily: 'UVNVanR',
  },
  title_text: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'UVNVan',
  },
  webview: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    marginTop: (Platform.OS) === 'ios' ? 20 : 0,
  },
});