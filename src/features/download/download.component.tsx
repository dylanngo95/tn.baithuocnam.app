import * as React from 'react';
import {
  View, StyleSheet, Text,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { downloadStart } from './download.actions';
import NetWorkStateComponent from '../../components/network-state';
import { setConnectedOn, setConnectedOff } from '../splash/splash.actions';


export interface DownloadProps {
  downloadStart: any;
  isConnected: boolean;
  setConnectedOn: any;
  setConnectedOff: any;
}

export interface DownloadState {
}

const mapStateToProps = (state: any) => ({
  error: state.download.error,
  isConnected: state.splash.isConnected,
});

const mapDispatchToProps = (dispatch: any) => ({
  downloadStart: () => dispatch(downloadStart()),
  setConnectedOn: () => dispatch(setConnectedOn()),
  setConnectedOff: () => dispatch(setConnectedOff()),
});

class DownloadComponent extends React.Component<DownloadProps, DownloadState> {
  constructor(props: DownloadProps) {
    super(props);
  }

  public componentDidMount() {
    if (this.props.isConnected) {
      this.props.downloadStart();
    }
  }

  public render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {
            !this.props.isConnected ?
              <Text style={styles.download_stop_text}>Download stopped</Text>
              :
              <View>
                <Text style={styles.download_runing_text}>Downloading...</Text>
                <ActivityIndicator
                  size='large'
                  color='blue'
                />
              </View>
          }

        </View>
        <NetWorkStateComponent
          onChange={(isConnected: boolean) => {
            if (isConnected) {
              this.props.setConnectedOn();
              this.props.downloadStart();
            } else {
              this.props.setConnectedOff();
            }
          }}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  download_stop_text: {
    fontSize: 15,
    fontWeight: '600',
  },
  download_runing_text: {
    fontSize: 15,
    fontWeight: '600',
  },
});