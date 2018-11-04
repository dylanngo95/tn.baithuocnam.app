import * as React from 'react';
import { View, StyleSheet, Text, SliderComponent, Button } from 'react-native';
import { connect } from 'react-redux';
import { downloadStart } from './splash.actions';

export interface SplashProps {
  downloadStart: any;
}

export interface SplashState {
}

const mapStateToProps = (state: any) => ({
  contents: state.splash.contents,
  error: state.splash.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  downloadStart: () => dispatch(downloadStart()),
});

class SplashComponent extends React.Component<SplashProps, SplashState> {
  constructor(props: SplashProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>Splash Component</Text>
         <Button
          title='dowload'
          onPress={() => {
            this.props.downloadStart();
          }}
         />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashComponent);