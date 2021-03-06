import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Header from './header';

const ComponentLeft = () =>
    <View style={{ flex: 1, alignItems: 'flex-start' }} >
        <Image
            source={require('../../assets/images/ic_search.png')}
            style={{ resizeMode: 'contain', width: 25, height: 25, marginLeft: 16, alignSelf: 'flex-start' }}
        />
    </View>;


const ComponentCenter = () =>
    <View style={{ flex: 1 }}>
        <Image
            source={require('../../assets/images/ic_google.png')}
            style={{ resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
        />
    </View>;

const ComponentRight = () =>
    <View style={{ flex: 1 }}>
        <Image
            source={require('../../assets/images/ic_profile.png')}
            style={{ resizeMode: 'contain', width: 35, height: 35, marginRight: 16, alignSelf: 'flex-end' }}
        />
    </View>;


export interface HeaderProps {
    componentLeft?: any;
    componentCenter?: any;
    componentRight?: any;

    lineBottomView?: any;
}

export interface HeaderState {
    componentLeft: any;
    componentCenter: any;
    componentRight: any;
}

export default class HeaderComponent extends React.PureComponent<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            componentLeft: this.props.componentLeft ? this.props.componentLeft : ComponentLeft,
            componentCenter: this.props.componentCenter ? this.props.componentCenter : ComponentCenter,
            componentRight: this.props.componentRight ? this.props.componentRight : ComponentRight,
        };
    }

    public render() {
        return (
            <Header
                componentLeft={this.state.componentLeft}
                componentCenter={this.state.componentCenter}
                componentRight={this.state.componentRight}
                navigationBarStyle={{ backgroundColor: '#ffffff' }}
                statusBarStyle={{ barStyle: 'dark-content', backgroundColor: '#ffffff' }}
                lineBottomView={this.props.lineBottomView ? this.props.lineBottomView : <View/> }
            />
        );
    }
}
