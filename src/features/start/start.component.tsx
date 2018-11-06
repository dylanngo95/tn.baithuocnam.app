import * as React from 'react';
import { TabbarCustom } from '../../navigations/tabbar';
import { RootStackGlobal } from '../../common/global/rootstack.global';

export interface StartProps {
    navigation: any;
}

export interface StartState {
}

export default class StartComponent extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props);
    RootStackGlobal.set(this.props.navigation);
  }

  public render() {
    return (
        <TabbarCustom/>
    );
  }
}
