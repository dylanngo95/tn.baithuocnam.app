import * as React from 'react';
import {
  View, StyleSheet, Text,
  StatusBar, NetInfo, Image,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import DownloadComponent from '../download/download.component';
import { checkDataLocalDone, checkDataLocalStart, setConnectedOn, setConnectedOff, setConnectedState } from './splash.actions';
import { RootStack } from '../../navigations';

const images = {
  icon_splash: require('../../../assets/images/ic_splash.png'),
};

import * as fs from 'react-native-fs';

export interface SplashViewProps {
}

export interface SplashViewState {
  spinValue: Animated.Value;
}

export class SplashView extends React.Component<SplashViewProps, SplashViewState> {
  constructor(props: SplashViewProps) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(0),
    };
  }

  public componentDidMount() {
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
      }
    ).start();
  }

  public render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View
        style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <Animated.Image
          style={{ width: 70, height: 70, transform: [{ rotate: spin }] }}
          source={images.icon_splash}
        />
      </View>
    );
  }
}


export interface SplashProps {
  error: string;
  isDataEmpty: boolean;
  isShowSplash: boolean;
  isConnected: boolean;
  checkDataLocalStart: any;
  setConnectedOn: any;
  setConnectedOff: any;
  setConnectedState: any;
}

export interface SplashState {
}

const mapStateToProps = (state: any) => ({
  error: state.splash.error,
  isDataEmpty: state.splash.isDataEmpty,
  isShowSplash: state.splash.isShowSplash,
  isConnected: state.splash.isConnected,
});

const mapDispatchToProps = (dispatch: any) => ({
  checkDataLocalStart: () => dispatch(checkDataLocalStart()),
  setConnectedOn: () => dispatch(setConnectedOn()),
  setConnectedOff: () => dispatch(setConnectedOff()),
  setConnectedState: (isConnected: boolean) => dispatch(setConnectedState(isConnected)),
});

class SplashComponent extends React.Component<SplashProps, SplashState> {
  constructor(props: SplashProps) {
    super(props);
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.props.setConnectedOn();
      } else {
        this.props.setConnectedOff();
      }
    });
  }

  public async componentDidMount() {
    // this.props.checkDataLocalStart();
    if (Platform.OS === 'android') {
      try {
        const isRealm = await fs.exists(fs.DocumentDirectoryPath + '/default.realm');
        if (isRealm) {
          setTimeout(() => {
            this.props.checkDataLocalStart();
          }, 500);
        } else {
          const res = await fs.copyFileAssets('db/default.realm', fs.DocumentDirectoryPath + '/default.realm');
          this.props.checkDataLocalStart();
        }
      } catch (error) {
       console.warn(error);
      }
    } else {
      setTimeout(() => {
        this.props.checkDataLocalStart();
      }, 500);
    }
  }

  public render() {
    return (
      this.props.isShowSplash ? <SplashView /> : this.props.isDataEmpty ? <DownloadComponent/> : <RootStack />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});