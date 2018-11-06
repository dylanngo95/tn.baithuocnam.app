import * as React from 'react';
import {
  View, StyleSheet, Text,
  SliderComponent, Button,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { downloadStart } from './download.actions';


export interface DownloadProps {
  downloadStart: any;
}

export interface DownloadState {
}

const mapStateToProps = (state: any) => ({
  error: state.download.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  downloadStart: () => dispatch(downloadStart()),
});

class DownloadComponent extends React.Component<DownloadProps, DownloadState> {
  constructor(props: DownloadProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.downloadStart();
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 15 }}>Downloading...</Text>
        <ActivityIndicator
          size='large'
          color='blue'
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
});