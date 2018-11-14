import * as React from 'react';
import {
  View, StyleSheet,
  Text, NetInfo,
} from 'react-native';

export interface NetWorkStateProps {
  onChange?: any;
}

export interface NetWorkStateState {
  isConnected: boolean;
  isFirst: boolean;
}

export default class NetWorkStateComponent extends React.Component<NetWorkStateProps, NetWorkStateState> {
  constructor(props: NetWorkStateProps) {
    super(props);
    this.state = {
      isConnected: true,
      isFirst: true,
    };

    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );

  }

  public componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ isConnected, isFirst: true });
      if (this.props.onChange) {
        this.props.onChange(isConnected);
      }
    });
  }

  public componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }

  private handleConnectivityChange = (isConnected: boolean) => {
    this.setState({ isConnected, isFirst: false }, () => {
      setTimeout(() => {
        this.setState({isFirst: true});
      }, 1000);
    });
    if (this.props.onChange) {
      this.props.onChange(isConnected);
    }
  }

  public render() {
    return (
      !this.state.isConnected ?
        <View style={styles.view_no_connected}>
          <Text style={styles.view_no_connected_text}>No connection</Text>
        </View>
        :
        <View style={styles.view_online}>
          {
            !this.state.isFirst ?
            <View style={styles.view_back_online}>
              <Text style={styles.view_back_online_text}>Back online</Text>
            </View>
            :
            null
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  view_no_connected: {
    width: '100%',
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  view_no_connected_text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Arial',
  },
  view_online: {
    width: '100%',
  },
  view_back_online: {
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  view_back_online_text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Arial',
  },
});