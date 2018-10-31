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

export interface HeaderProps {
  statusBarStyle: object;
  navigationBarStyle: object;
  lineBottom?: object;
  componentLeft: any;
  componentCenter: any;
  componentRight: any;
}

export interface HeaderState {
}

export default class Header extends React.Component<HeaderProps, HeaderState> {

  public static defaultProps: Partial<HeaderProps> = {
    statusBarStyle: {
      barStyle: 'light-content',
      backgroundColor: '#215e79',
    },
    navigationBarStyle: {
      backgroundColor: '#215e79',
    },
    lineBottom: {
      backgroundColor: '#CCCCCC',
      height: 0.5,
      shadowRadius: 5,
      shadowOpacity: 0.8,
      shadowColor: 'black',
      shadowOffset: {
        height: 2,
        width: 0,
      },
    },
    componentLeft: () => <View style={{ flex: 1 }} />,
    componentCenter: () => <View style={{ flex: 1 }} />,
    componentRight: () => <View style={{ flex: 1 }} />,
  };

  constructor(props: HeaderProps) {
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
          this.props.navigationBarStyle,
        ]}>
          <this.props.componentLeft/>
          <this.props.componentCenter/>
          <this.props.componentRight/>
        </View>
        <View
          style={this.props.lineBottom}
        />
      </View>
    );
  }
}

const StatusBar_Height = Platform.OS === 'ios' ? 20 : 0;
const AppBar_Height = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
