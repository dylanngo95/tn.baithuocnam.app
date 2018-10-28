import * as React from 'react';
import {
  StyleSheet,
  View, Platform,
  StatusBar,
} from 'react-native';

export interface MyStatusBarProps {
  backgroundColor: any;
  barStyle: any;
}

const MyStatusBar = (props: MyStatusBarProps) => (
  <View style={[styles.statusBar, props.backgroundColor ]}>
    <StatusBar
      barStyle= {props.barStyle}
      backgroundColor={props.backgroundColor}
    />
  </View>
);

export interface NavigationBarProps {
  statusBarStyle: object;
  navigationBarStyle: object;
  componentLeft: JSX.Element;
  componentCenter: JSX.Element;
  componentRight: JSX.Element;
}

export interface NavigationBarState {
}

export default class NavigationBarComponent extends React.Component<NavigationBarProps, NavigationBarState> {

  public static defaultProps: Partial<NavigationBarProps> = {
    statusBarStyle: {
      barStyle: 'light-content',
      backgroundColor: '#215e79',
    },
    navigationBarStyle: {
      backgroundColor: '#215e79',
    },
    componentLeft: <View style={{ flex: 1 }} />,
    componentCenter: <View style={{ flex: 1 }} />,
    componentRight: <View style={{ flex: 1 }} />,
  };

  constructor(props: NavigationBarProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <MyStatusBar
          backgroundColor={(this.props.statusBarStyle as any).backgroundColor}
          barStyle={(this.props.statusBarStyle as any).barStyle} />
        <View style={[
          styles.naviagtionBar,
          this.props.statusBarStyle,
        ]}>
          {this.props.componentLeft}
          {this.props.componentCenter}
          {this.props.componentRight}
        </View>
      </View>
    );
  }
}

const StatusBar_Height = Platform.OS === 'ios' ? 20 : 0;
const AppBar_Height = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
  },
  statusBar: {
    height: StatusBar_Height,
  },
  naviagtionBar: {
    flexDirection: 'row',
    height: AppBar_Height,
    backgroundColor: '#215e79',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
