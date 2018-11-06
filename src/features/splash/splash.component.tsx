import * as React from 'react';
import {
  View, StyleSheet, Text,
  SliderComponent, Button,
  ActivityIndicator, ImageBackground,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import DownloadComponent from '../download/download.component';
import { checkDataLocalDone, checkDataLocalStart } from './splash.actions';
import { RootStack } from '../../navigations';


const Splash = () => {
  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/img-glass.png')}
      style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <Text style={{ color: 'white', fontSize: 18 }}>Slpash Screen</Text>
    </ImageBackground>
  );
};

export interface SplashProps {
  error: string;
  isDataEmpty: boolean;
  isShowSplash: boolean;
  checkDataLocalStart: any;
}

export interface SplashState {
}

const mapStateToProps = (state: any) => ({
  error: state.splash.error,
  isDataEmpty: state.splash.isDataEmpty,
  isShowSplash: state.splash.isShowSplash,
});

const mapDispatchToProps = (dispatch: any) => ({
  checkDataLocalStart: () => dispatch(checkDataLocalStart()),
});

class SplashComponent extends React.Component<SplashProps, SplashState> {
  constructor(props: SplashProps) {
    super(props);
  }

  public componentDidMount() {
    setTimeout(() => {
      this.props.checkDataLocalStart();
    }, 2000);
  }

  public render() {
    return (
      this.props.isDataEmpty ?
        <DownloadComponent />
        :
        this.props.isShowSplash ? <Splash /> : <RootStack />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});