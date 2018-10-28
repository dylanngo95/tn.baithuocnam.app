import * as React from 'react';
import { RootStack } from '../../navigations';

export interface StartProps {
}

export interface StartState {
}

export default class StartComponent extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <RootStack />
    );
  }
}
