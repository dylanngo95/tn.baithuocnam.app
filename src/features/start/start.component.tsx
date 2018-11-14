import * as React from 'react';
import { TabbarCustom } from '../../navigations/tabbar';
import { RootStackGlobal } from '../../common/global/rootstack.global';
import { NetInfo } from 'react-native';


export interface StartProps {
    navigation: any;
}

export interface StartState {
}

export default class StartComponent extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props);
    RootStackGlobal.set(this.props.navigation);

    NetInfo.isConnected.fetch().then(isConnected => {
      console.warn('First, is ' + (isConnected ? 'online' : 'offline'));
    });
    function handleFirstConnectivityChange(isConnected: any) {
      console.warn('Then, is ' + (isConnected ? 'online' : 'offline'));
      // NetInfo.isConnected.removeEventListener(
      //   'connectionChange',
      //   handleFirstConnectivityChange
      // );
    }
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );

  }

  public render() {
    return (
        <TabbarCustom/>
    );
  }
}
